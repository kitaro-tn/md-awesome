/**
 * Md-Awesome module
 * @author Tatsunori Nishikori<tora.1986.tatsu@gmail.com>
 * @description MdAwesome is markdown text editor
 */

import * as marked from "marked";
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
} from "./markdownSyntax";

/**
 * MdAwesome class
 * @class MdAwesome
 * @description provide text editor input / output
 */
export class MdAwesome {

  public textarea: string;
  private originalText: string;
  private baseOption = {
    breaks: true,
    gfm: true,
    headerIds: true,
    headerPrefix: "mdaw-",
  };

  constructor(text: string) {
    this.textarea = text;
    this.originalText = text;
    marked.setOptions(this.baseOption);
  }

  /**
   * original text
   * @return {String} original textarea
   */
  public original(): string {
    return this.originalText;
  }

  /**
   * preview text
   * @return {String} convert to html
   */
  public preview(): string {
    return marked(this.textarea);
  }

  /**
   * clear text
   */
  public clear() {
    this.textarea = null;
  }

  /**
   * reset original text
   */
  public reset() {
    this.textarea = this.originalText;
  }

  /**
   * marked set option
   * @param {Object} option
   * @see https://marked.js.org/#/USING_ADVANCED.md
   */
  public setOption(option) {
    marked.setOptions(Object.assign(this.baseOption, option));
  }

}
