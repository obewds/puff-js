// ./tests/generators/vv-anchor-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import vvAnchorVue from '../../src/generators/vv-anchor-vue'

describe('./src/generators/vv-anchor-vue module', () => {

    test('module can be imported successfully', () => {

        expect(vvAnchorVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        const value = vvAnchorVue({
            filePathComment: './test/comment/filepath.string',
            appVvFilePath: './test/app.vv.ts',
        })

        expect(typeof value === 'string').toBe(true)

    })

})
