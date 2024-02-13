/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

export const handleRequest = (request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext) => {
	const markup = renderToString(<RemixServer context={remixContext} url={request.url} />)

	responseHeaders.set('Content-Type', 'text/html')

	return new Response('<!DOCTYPE html>' + markup, {
		headers: responseHeaders,
		status: responseStatusCode,
	})
}

export default handleRequest