// Type definitions for request-promise 4.1
// Project: https://github.com/request/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>, Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import request = require('request');
import http = require('http');
import errors = require('request-promise/errors');
import Promise = require('bluebird');

declare namespace requestPromise {
    interface RequestPromise extends request.Request, Promise<any> {
        promise(): Promise<any>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?(body: any, response: http.IncomingMessage, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean;
        resolveWithFullResponse?: boolean;
    }

    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare var requestPromise: request.RequestAPI<requestPromise.RequestPromise, requestPromise.RequestPromiseOptions, request.RequiredUriUrl>;
export = requestPromise;
