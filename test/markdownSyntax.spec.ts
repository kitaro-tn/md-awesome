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
  let markdownClass, subject;

  beforeEach(() => {
    console.log(markdownClass);
    subject = markdownClass.append();
  });

  describe("HeadingSyntax", () => {
    describe("#append()", () => {
      let level = "h1";
      beforeEach(() => {
        markdownClass = new HeadingSyntax(level);
      });
      it("should return markdown syntax", () => {
        markdownClass = new HeadingSyntax("h1");
        expect(markdownClass.append()).to.equal("#");
      });
    });
  });

  // it("shouuld be ok", () => {
  //   expect(1).to.equal(1);
  // });
});
