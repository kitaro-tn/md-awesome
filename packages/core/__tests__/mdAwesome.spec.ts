import { expect } from "chai";
import { describe, it } from "mocha";
import { MdAwesome } from "../src/ts/mdAwesome";

describe("MdAwesome", () => {
  let subject, text;
  describe("#original", () => {
    beforeEach(() => {
      text = "# h1";
      subject = new MdAwesome(text);
    });
    it("should return original text", () => {
      expect(subject.original()).to.equal(text);
    });
  });

  describe("#preview", () => {
    beforeEach(() => {
      text = "# h1";
      subject = new MdAwesome(text);
    });
    it("should return preview text", () => {
      expect(subject.preview()).to.equal('<h1 id="mdaw-h1">h1</h1>\n');
      subject.textarea = "## h2";
      expect(subject.preview()).to.equal('<h2 id="mdaw-h2">h2</h2>\n');
    });
  });

  describe("#clear", () => {
    beforeEach(() => {
      text = "# h1";
      subject = new MdAwesome(text);
    });
    it("should text clear", () => {
      subject.clear();
      expect(subject.textarea).to.equal(null);
    });
  });

  describe("#original", () => {
    beforeEach(() => {
      text = "# h1";
      subject = new MdAwesome(text);
    });
    it("should original text ", () => {
      subject.clear();
      expect(subject.original()).to.equal(text);
    });
  });

  describe("#reset", () => {
    beforeEach(() => {
      text = "# h1";
      subject = new MdAwesome(text);
    });
    it("should reset text ", () => {
      subject.clear();
      expect(subject.textarea).to.equal(null);
      subject.reset();
      expect(subject.textarea).to.equal(text);
    });
  });

});
