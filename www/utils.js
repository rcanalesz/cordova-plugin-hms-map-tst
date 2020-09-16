"use strict";
/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncExec = exports.isObject = exports.isString = void 0;
const cordova_1 = require("cordova");
// /////////////////////////////////////////////////////////
// GENERAL UTILS
// /////////////////////////////////////////////////////////
exports.isString = (it) => typeof it === 'string' || it instanceof String;
exports.isObject = (obj) => typeof obj === 'object' && obj !== null;
function asyncExec(clazz, func, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clazz, func, args);
    });
}
exports.asyncExec = asyncExec;
;
function initHms() {
    console.log('hms :: init called.');
    initEventHandler();
    initConstantSetter();
}
function initEventHandler() {
    if (window.hmsEventHandler != null) {
        return;
    }
    console.log('hms-map :: window.hmsEventHandler');
    window.hmsEventHandlers = {};
    window.hmsEventHandler = (eventName, data) => {
        console.log('eventReceived: ' + eventName + ' with data: ', data);
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].forEach((handler) => {
                handler(data);
            });
        }
    };
    window.registerHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].push(handler);
        }
        else {
            window.hmsEventHandlers[eventName] = [handler];
        }
    };
    window.unregisterHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            if (handler) {
                const idx = window.hmsEventHandlers[eventName].indexOf(handler);
                if (idx > -1) {
                    window.hmsEventHandlers[eventName].splice(idx, 1);
                }
            }
            else { // if no specific handler is specified, remove all
                window.hmsEventHandlers[eventName] = [];
            }
        }
    };
}
function initConstantSetter() {
    if (window.hmsSetConstants != null) {
        return;
    }
    console.log('hms-map :: window.hmsSetConstants');
    window.hmsSetConstants = (objName, constants) => {
        console.log('hms-map :: initializing constants for', objName, 'with', constants);
        if (window[objName] == null) {
            console.log('hms-map :: uninitialized obj');
            return;
        }
        Object.keys(constants).forEach(key => {
            Object.defineProperty(window[objName], key, { value: constants[key] });
        });
    };
}
// /////////////////////////////////////////////////////////
// EXPORT
// /////////////////////////////////////////////////////////
initHms();
//# sourceMappingURL=utils.js.map