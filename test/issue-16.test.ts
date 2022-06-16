// see https://github.com/panva/oauth4webapi/issues/16

import test from 'ava'
import { issuer, client, getResponse } from './_setup.js'
import * as lib from '../src/index.js'

const response = getResponse(JSON.stringify({ error: 'invalid_request' }))

test('handles 200 OK errors from Token Endpoint', async (t) => {
  t.true(
    lib.isOAuth2Error(await lib.processAuthorizationCodeOAuth2Response(issuer, client, response)),
  )
  t.true(
    lib.isOAuth2Error(await lib.processAuthorizationCodeOpenIDResponse(issuer, client, response)),
  )
  t.true(lib.isOAuth2Error(await lib.processDeviceCodeResponse(issuer, client, response)))
  t.true(lib.isOAuth2Error(await lib.processClientCredentialsResponse(issuer, client, response)))
  t.true(lib.isOAuth2Error(await lib.processRefreshTokenResponse(issuer, client, response)))
})

test('handles 200 OK errors from PAR Endpoint', async (t) => {
  t.true(lib.isOAuth2Error(await lib.processPushedAuthorizationResponse(issuer, client, response)))
})

test('handles 200 OK errors from Revocation Endpoint', async (t) => {
  t.true(lib.isOAuth2Error(await lib.processRevocationResponse(response)))
})

test('handles 200 OK errors from Introspection Endpoint', async (t) => {
  t.true(lib.isOAuth2Error(await lib.processIntrospectionResponse(issuer, client, response)))
})

test('handles 200 OK errors from Device Authorization Endpoint', async (t) => {
  t.true(lib.isOAuth2Error(await lib.processDeviceAuthorizationResponse(issuer, client, response)))
})
