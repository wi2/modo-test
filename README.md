search with pagination

```graphql
{
  users(name: "mil", page: 2) {
    id
    name
  }
}
```

user profile info

```graphql
{
  user(id: "2") {
    id
    name
    media {
      url
    }
    send {
      content
    }
    receive {
      content
    }
  }
}
```

media info with user

```graphql
{
  media(id: "2") {
    id
    url
    user {
      id
      name
    }
  }
}
```

message info with user

```graphql
{
  message(id: "2") {
    id
    content
    sender {
      name
    }
    receiver {
      name
    }
  }
}
```
