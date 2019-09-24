/**
 * MarkdownSyntax interface
 * @description Inherit this interface when adding editor items
 * @see https://www.markdownguide.org/basic-syntax/
 */
interface MarkdownSyntax {
  /** markdown syntax name */
  name: string;
  /** markdown syntax description(tooltip help) */
  description: string;
  /** entered text */
  enteredText: string;
  /** append markdown syntax */
  append(): string;
}

export class HeadingSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public headingLevel: string, public enteredText: string = "") {
    if (!this.validateLevel()) {
      throw new RangeError("This heading level not allow. Heading level is h1~h5.");
    }
    this.name = "heading";
    this.description = "To create a heading.";
  }

  public append(): string {
    let headingNumber: number = parseInt(this.headingLevel[1], 10);
    return "#".repeat(headingNumber) + " " + this.enteredText;
  }

  private validateLevel(): boolean {
    return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(this.headingLevel);
  }

}

export class LineBreakSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "line break";
    this.description = "To create a line break(<br>).";
  }

  public append(): string {
    return this.enteredText + "  ";
  }
}

export class BoldSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "bold";
    this.description = "To bold text.";
  }

  public append(): string {
    return "**" + this.enteredText + "**";
  }
}

export class ItalicSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "italic";
    this.description = "To italicize text.";
  }

  public append(): string {
    return "_" + this.enteredText + "_";
  }
}

export class BoldAndItalicSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "bold and italic";
    this.description = "To emphasize text with bold and italics.";
  }

  public append(): string {
    return "***" + this.enteredText + "***";
  }
}

export class BlockquoteSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "blockquote";
    this.description = "To create a blockquote.";
  }

  public append(): string {
    return this.enteredText.split("\n").map((text) =>  "> " + text).join("\n");
  }
}

export class UnorderedListSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "unordered list";
    this.description = "To create an unordered list.";
  }

  public append(): string {
    return this.enteredText.split("\n").map((text) =>  "- " + text).join("\n");
  }
}

export class OrderedListSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "") {
    this.name = "ordered list";
    this.description = "To create an ordered list.";
  }

  public append(): string {
    return this.enteredText.split("\n").map((text, idx) =>  `${idx + 1}. ${text}`).join("\n");
  }
}

export class CodeSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "", public codeFormat: string = null) {
    this.name = "code";
    this.description = "To denote a word or phrase as code.";
  }

  public append(): string {
    if (this.codeFormat == null) {
      return "```"  + "\n" + this.enteredText + "\n```";
    } else {

      return "```" + this.codeFormat + "\n" + this.enteredText + "\n```";
    }
  }
}

export class LinkSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "Link text", public url: string = "https://", public title: string = null) {
    this.name = "link";
    this.description = "To create a link.";
  }

  public append(): string {
    if (this.title === null) {
      return `[${this.enteredText}](${this.url})`;
      } else {
      return `[${this.enteredText}](${this.url}) "${this.title}"`;
    }
  }
}

export class ImageSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;

  constructor(public enteredText: string = "Link text", public url: string = "https://", public title: string = null) {
    this.name = "image";
    this.description = "To create a image.";
  }

  public append(): string {
    if (this.title === null) {
      return `![${this.enteredText}](${this.url})`;
      } else {
      return `![${this.enteredText}](${this.url}) "${this.title}"`;
    }
  }
}

export class TableSyntax implements MarkdownSyntax {

  public name: string;
  public description: string;
  public enteredText: string;
  private baseWhiteSpace: string;
  private baseHeaderLine: string;

  constructor(public rowLength: number = 1,
              public colLength: number = 1,
              public repeat: number = 8,
              public align: number = 0) {
    if (this.rowLength < 1 || this.colLength < 1) {
      throw new RangeError("Row and Col is more than 1 required.");
    }
    this.baseWhiteSpace = " ".repeat(this.repeat);
    this.baseHeaderLine = "-".repeat(this.repeat);
    this.name = "table";
    this.description = "To create table.";
  }

  public append(): string {
    return "";
  }

  // private buildTable(): {
  //
  // }

}

