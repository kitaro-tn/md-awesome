import { expect } from "chai";
import { beforeEach, describe, it } from "mocha";
import {
  BlockquoteSyntax,
  BoldAndItalicSyntax,
  BoldSyntax,
  CodeSyntax,
  HeadingSyntax,
  ImageSyntax,
  ItalicSyntax,
  LineBreakSyntax,
  LinkSyntax,
  OrderedListSyntax,
  UnorderedListSyntax,
} from "../src/ts/markdownSyntax";

describe("MarkdownSyntax", () => {
  let subject, text;

  describe("HeadingSyntax", () => {
    describe("#append()", () => {
      let level = "h1";
      beforeEach(() => {
        text = "heading";
        subject = new HeadingSyntax(level, text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`# ${text}`);
      });
    });
  });

  describe("LineBreakSyntax", () => {
    describe("#append()", () => {
      beforeEach(() => {
        text = "break";
        subject = new LineBreakSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`${text}  `);
      });
    });
  });

  describe("BoldSyntax", () => {
    describe("#append()", () => {
      beforeEach(() => {
        text = "bold";
        subject = new BoldSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`**${text}**`);
      });
    });
  });

  describe("ItalicSyntax", () => {
    describe("#append()", () => {
      beforeEach(() => {
        text = "italic";
        subject = new ItalicSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`_${text}_`);
      });
    });
  });

  describe("BoldAndItalicSyntax", () => {
    describe("#append()", () => {
      beforeEach(() => {
        text = "bold and italic";
        subject = new BoldAndItalicSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`***${text}***`);
      });
    });
  });

  describe("BlockquoteSyntax", () => {
    describe("#append()", () => {
      let multilineText = ["aaaa", "bbbb"];
      beforeEach(() => {
        text = multilineText.join("\n");
        subject = new BlockquoteSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`> ${multilineText[0]}\n> ${multilineText[1]}`);
      });
    });
  });

  describe("UnorderedListSyntax", () => {
    describe("#append()", () => {
      let multilineText = ["aaaa", "bbbb"];
      beforeEach(() => {
        text = multilineText.join("\n");
        subject = new UnorderedListSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`- ${multilineText[0]}\n- ${multilineText[1]}`);
      });
    });
  });

  describe("OrderedListSyntax", () => {
    describe("#append()", () => {
      let multilineText = ["aaaa", "bbbb"];
      beforeEach(() => {
        text = multilineText.join("\n");
        subject = new OrderedListSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal(`1. ${multilineText[0]}\n2. ${multilineText[1]}`);
      });
    });
  });

  describe("CodeSyntax", () => {
    describe("#append()", () => {
      beforeEach(() => {
        text = '$ echo "Hello world"';
        subject = new CodeSyntax(text);
      });
      it("should return markdown syntax", () => {
        expect(subject.append()).to.equal("```\n" + text + "\n```");
      });
    });
  });

  describe("LinkSyntax", () => {
    let url = "https://hogehoge.com";
    context("when non link title", () => {
      describe("#append()", () => {
        beforeEach(() => {
          text = "link text";
          subject = new LinkSyntax(text, url);
        });
        it("should return markdown syntax", () => {
          expect(subject.append()).to.equal(`[${text}](${url})`);
        });
      });
    });
    context("when link title", () => {
      describe("#append()", () => {
        let title = "link title";
        beforeEach(() => {
          text = "link text";
          subject = new LinkSyntax(text, url, title);
        });
        it("should return markdown syntax", () => {
          expect(subject.append()).to.equal(`[${text}](${url}) "${title}"`);
        });
      });
    });
  });

  describe("ImageSyntax", () => {
    let url = "https://hogehoge.com/image.png";
    context("when non link title", () => {
      describe("#append()", () => {
        beforeEach(() => {
          text = "link text";
          subject = new ImageSyntax(text, url);
        });
        it("should return markdown syntax", () => {
          expect(subject.append()).to.equal(`![${text}](${url})`);
        });
      });
    });
    context("when link title", () => {
      describe("#append()", () => {
        let title = "link title";
        beforeEach(() => {
          text = "link text";
          subject = new ImageSyntax(text, url, title);
        });
        it("should return markdown syntax", () => {
          expect(subject.append()).to.equal(`![${text}](${url}) "${title}"`);
        });
      });
    });
  });

});
