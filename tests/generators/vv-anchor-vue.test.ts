// ./tests/generators/vv-anchor-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import vvAnchorVue from '../../src/generators/vv-anchor-vue'

describe('./src/generators/vv-anchor-vue module', () => {

    test('module can be imported successfully', () => {

        expect(vvAnchorVue).toBeTruthy()

    })

    test('module default value is a valid string, and returns a value with the expected options argument strings within it', () => {

        const opts = {
            filePathComment: './test/comment/filepath.string',
            appVvFilePath: './test/app.vv.ts',
        }

        const result = vvAnchorVue(opts)

        expect(typeof result === 'string').toBe(true)

        expect(result).toContain(opts.filePathComment)

        expect(result).toContain(opts.appVvFilePath)

    })

})
