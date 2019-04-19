import { describe, it, beforeEach } from "mocha";
import { expect } from "chai";
import {
  HeadingSyntax,
  LineBreakSyntax,
  BoldSyntax,
  ItalicSyntax,
  BoldAndItalicSyntax,
  BlockquoteSyntax,
  UnorderedListSyntax,
  OrderedListSyntax,
  CodeSyntax,
  LinkSyntax,
  ImageSyntax
} from "../src/ts/MarkdownSyntax";

describe("MarkdownSyntax", () => {
  var markdownClass, subject;

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
        markdownClass = new HeadingSyntax(level);
        console.log('aaaa');
        console.log(HeadingSyntax);
        expect(markdownClass.append()).to.equal("#");
      });
    });
  });

  // it("shouuld be ok", () => {
  //   expect(1).to.equal(1);
  // });
});
