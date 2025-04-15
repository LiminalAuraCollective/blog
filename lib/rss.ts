import { IRSSChannel, IRSSItem } from "./types";

export default class RSSGenerator {
  private channel: IRSSChannel;

  constructor(channelData: IRSSChannel) {
    this.channel = {
      ...channelData,
    };
  }

  public addItem(item: IRSSItem): void {
    if (!this.channel.items) {
      this.channel.items = [];
    }
    this.channel.items.push(item);
  }

  public generate(): string {
    let rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>`;

    // Channel required elements
    rss += this.generateElement("title", this.channel.title);
    rss += this.generateElement("link", this.channel.link);
    rss += this.generateElement("description", this.channel.description);

    // Channel optional elements
    if (this.channel.language)
      rss += this.generateElement("language", this.channel.language);
    if (this.channel.copyright)
      rss += this.generateElement("copyright", this.channel.copyright);
    if (this.channel.managingEditor)
      rss += this.generateElement(
        "managingEditor",
        this.channel.managingEditor
      );
    if (this.channel.webMaster)
      rss += this.generateElement("webMaster", this.channel.webMaster);
    if (this.channel.pubDate)
      rss += this.generateElement(
        "pubDate",
        this.formatDate(this.channel.pubDate)
      );
    if (this.channel.lastBuildDate)
      rss += this.generateElement(
        "lastBuildDate",
        this.formatDate(this.channel.lastBuildDate)
      );
    if (this.channel.generator)
      rss += this.generateElement("generator", this.channel.generator);
    if (this.channel.docs)
      rss += this.generateElement("docs", this.channel.docs);
    if (this.channel.ttl)
      rss += this.generateElement("ttl", this.channel.ttl.toString());
    if (this.channel.rating)
      rss += this.generateElement("rating", this.channel.rating);

    // Channel categories
    if (this.channel.categories) {
      this.channel.categories.forEach((category) => {
        rss += this.generateElement("category", category);
      });
    }

    // Channel atom
    if (this.channel.atomLink) {
      const {
        href,
        rel = "self",
        type = "application/rss+xml",
      } = this.channel.atomLink;
      rss += `\n    <atom:link href="${this.escapeXml(
        href
      )}" rel="${rel}" type="${type}" />`;
    }

    // Channel image
    if (this.channel.image) {
      rss += "<image>";
      rss += this.generateElement("url", this.channel.image.url);
      rss += this.generateElement("title", this.channel.image.title);
      rss += this.generateElement("link", this.channel.image.link);
      if (this.channel.image.width)
        rss += this.generateElement(
          "width",
          this.channel.image.width.toString()
        );
      if (this.channel.image.height)
        rss += this.generateElement(
          "height",
          this.channel.image.height.toString()
        );
      if (this.channel.image.description)
        rss += this.generateElement(
          "description",
          this.channel.image.description
        );
      rss += "</image>";
    }

    // Items
    if (this.channel.items) {
      this.channel.items.forEach((item) => {
        rss += "<item>";
        rss += this.generateElement("title", item.title);
        rss += this.generateElement("link", item.link);
        rss += this.generateElement("description", item.description);

        if (item.author) rss += this.generateElement("author", item.author);
        if (item.categories) {
          item.categories.forEach((category) => {
            rss += this.generateElement("category", category);
          });
        }
        if (item.comments)
          rss += this.generateElement("comments", item.comments);
        if (item.enclosure) {
          rss += `<enclosure url="${this.escapeXml(
            item.enclosure.url
          )}" length="${item.enclosure.length}" type="${this.escapeXml(
            item.enclosure.type
          )}" />`;
        }
        if (item.guid) {
          const isPermaLink =
            item.guid.isPermaLink !== false ? "true" : "false";
          rss += `<guid isPermaLink="${isPermaLink}">${this.escapeXml(
            item.guid.value
          )}</guid>`;
        }
        if (item.pubDate)
          rss += this.generateElement("pubDate", this.formatDate(item.pubDate));
        if (item.source) {
          rss += `<source url="${this.escapeXml(
            item.source.url
          )}">${this.escapeXml(item.source.name)}</source>`;
        }

        rss += "</item>";
      });
    }

    rss += `
    </channel>
  </rss>`;

    return rss;
  }

  private generateElement(tag: string, content: string): string {
    return `\n    <${tag}>${this.escapeXml(content)}</${tag}>`;
  }

  private escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return c;
      }
    });
  }

  private formatDate(date: Date): string {
    return date.toUTCString();
  }
}
