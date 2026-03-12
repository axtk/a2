import type { Controller } from "appstage";

export const render: Controller = () => {
  return (req, res) => {
    let nonce = req.ctx?.nonce;

    res.send(
      "<!DOCTYPE html>" +
        '<html><head><meta charset="utf-8"/>' +
        '<meta name="viewport" content="width=device-width"/>' +
        '<link type="image/x-icon" rel="icon" href="/favicon.svg"/>' +
        "<title>Intro</title>" +
        `<style${nonce ? ` nonce="${nonce}"` : ""}>` +
        "body { padding: 0; margin: 0; } " +
        "header { background: #f4e8e1; overflow: hidden; } " +
        ".content { max-width: 42em; padding: 0 1em; margin: 0 auto; " +
        "box-sizing: border-box; }</style>" +
        '</head><body><header><div class="content">' +
        '<h1>Intro</h1></div></header><div class="content">' +
        "<main><p>This is demo content generated on the server. " +
        "Lorem ipsum dolor, quam velit, tincidunt vitae suscipit nullam." +
        "</p></main><footer><hr><p><em>appstage</em></p>" +
        '<p><a href="/">Main page</a></p></footer></div></body></html>\n',
    );
  };
};
