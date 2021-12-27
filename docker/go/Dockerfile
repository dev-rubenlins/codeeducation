#FROM golang:alpine as builder
FROM golang:1.13.8 AS build-env

WORKDIR /app 

COPY . .

RUN go build -o hello

FROM scratch

WORKDIR /app

COPY --from=build-env /app/hello /app/hello

ENTRYPOINT ["./hello"]