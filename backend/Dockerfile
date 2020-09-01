FROM golang:1.14

COPY . .

RUN go get github.com/gorilla/mux
RUN go build main.go

ENTRYPOINT ["./main"]
EXPOSE 8080