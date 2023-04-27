addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // 将请求重定向到chat.openai.com
  url.hostname = "chat.openai.com";
  const request = new Request(url.toString(), event.request);
  event.respondWith(fetch(request));
});
