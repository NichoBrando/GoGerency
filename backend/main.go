package main

import (
  "log"
  "github.com/gorilla/mux"
  "fmt"
  "net/http"
  "encoding/json"
)

/*json.NewEncoder(w).Encode(variable) is very important
with this, we can return data to frontend*/
func home(w http.ResponseWriter, r *http.Request){
  json.NewEncoder(w).Encode()
}

//Starting API with mux lib, to get HTTP methods.
func main(){
  fmt.Println("Rodando servidor na porta 8080")
  router := mux.NewRouter()
  router.HandleFunc("/", home).Methods("GET")
  log.Fatal(http.ListenAndServe(":8080", router))
}