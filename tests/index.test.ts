// ./tests/index.test.ts

import { describe, expect, test } from '@jest/globals'

import * as index from '../src/index'

describe('./src/index module', () => {

    test('module and module methods can all be imported successfully', () => {

        expect(index).toBeTruthy()

        expect(index.generateVvAnchorVue).toBeTruthy()

    })

})
