# Fastify JWT Sample

This is a super simple, very **basic** example of how JWTs can be used with Nest and Fastify **without** the use of Passport.

## Example

I use `curl` for testing and sending API requests, but Postman or Insomnia would be fine too.

### Without Authentication

```sh
curl http://localhost:3000/protected
{"statusCode":403,"message":"Forbidden resource","error":"Forbidden"}
```

### Getting the token

```sh
curl http://localhost:3000/auth/login -d 'email=test@test.com&password=s1mple'
eyJhbGciOiJIUzI1NiJ9.dGVzdEB0ZXN0LmNvbQ.TL-ROX3v5bJsRhxAgtZ7lg7af3r9pRkX22Sgqn97AHI
```

### Sending the Authenticated Request 

```sh
curl http://localhost:3000/protected -H 'authorization:Bearer eyJhbGciOiJIUzI1NiJ9.dGVzdEB0ZXN0LmNvbQ.TL-ROX3v5bJsRhxAgtZ7lg7af3r9pRkX22Sgqn97AHI'
All Good
```

## Notes to Keep In Mind

This example does not take into account adding a list of rejected tokens to check against (for things like signing out). It also does not use a secure secret or a database. This is just to show how JWTs _can_ be used. Use this as a base, and expand on it from there.