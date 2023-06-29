import { rest } from 'msw'

export const mainHandlers = [rest.get('/user', null)]
