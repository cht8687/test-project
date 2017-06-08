'use strict';

var Util = {
    noop: function noop() {},

    strip: function strip(value, re) {
        return value.replace(re, '');
    },

    isDelimiter: function isDelimiter(letter, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) {
            return letter === delimiter;
        }

        // multiple delimiters
        return delimiters.some(function (current) {
            if (letter === current) {
                return true;
            }
        });
    },

    stripDelimiters: function stripDelimiters(value, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) {
            var delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

            return value.replace(delimiterRE, '');
        }

        // multiple delimiters
        delimiters.forEach(function (current) {
            value = value.replace(new RegExp('\\' + current, 'g'), '');
        });

        return value;
    },

    headStr: function headStr(str, length) {
        return str.slice(0, length);
    },

    getMaxLength: function getMaxLength(blocks) {
        return blocks.reduce(function (previous, current) {
            return previous + current;
        }, 0);
    },

    // strip value by prefix length
    // for prefix: PRE
    // (PRE123, 3) -> 123
    // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
    getPrefixStrippedValue: function getPrefixStrippedValue(value, prefix, prefixLength) {
        if (value.slice(0, prefixLength) !== prefix) {
            var diffIndex = this.getFirstDiffIndex(prefix, value.slice(0, prefixLength));

            value = prefix + value.slice(diffIndex, diffIndex + 1) + value.slice(prefixLength + 1);
        }

        return value.slice(prefixLength);
    },

    getFirstDiffIndex: function getFirstDiffIndex(prev, current) {
        var index = 0;

        while (prev.charAt(index) === current.charAt(index)) if (prev.charAt(index++) === '') return -1;

        return index;
    },

    getFormattedValue: function getFormattedValue(value, blocks, blocksLength, delimiter, delimiters) {
        var result = '',
            multipleDelimiters = delimiters.length > 0,
            currentDelimiter;

        blocks.forEach(function (length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length),
                    rest = value.slice(length);

                result += sub;

                currentDelimiter = multipleDelimiters ? delimiters[index] || currentDelimiter : delimiter;

                if (sub.length === length && index < blocksLength - 1) {
                    result += currentDelimiter;
                }

                // update remaining string
                value = rest;
            }
        });

        return result;
    }
};

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = exports = Util;
}
//# sourceMappingURL=Util.js.map