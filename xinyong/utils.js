export const T = class T {
  constructor() { }

  static R(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  }

  static maxFromBits(t) {
    return Math.pow(2, t);
  }

  static limitUI04 = T.maxFromBits(4);
  static limitUI06 = T.maxFromBits(6);
  static limitUI08 = T.maxFromBits(8);
  static limitUI12 = T.maxFromBits(12);
  static limitUI14 = T.maxFromBits(14);
  static limitUI16 = T.maxFromBits(16);
  static limitUI32 = T.maxFromBits(32);
  static limitUI40 = T.maxFromBits(40);
  static limitUI48 = T.maxFromBits(48);

  static randomUI04() {
    return this.R(0, this.limitUI04 - 1);
  }
  static randomUI06() {
    return this.R(0, this.limitUI06 - 1);
  }
  static randomUI08() {
    return this.R(0, this.limitUI08 - 1);
  }
  static randomUI12() {
    return this.R(0, this.limitUI12 - 1);
  }
  static randomUI14() {
    return this.R(0, this.limitUI14 - 1);
  }
  static randomUI16() {
    return this.R(0, this.limitUI16 - 1);
  }
  static randomUI32() {
    return this.R(0, this.limitUI32 - 1);
  }
  static randomUI40() {
    return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30);
  }
  static randomUI48() {
    return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30);
  }

  static paddedString(str, length, padChar = "0") {
    str = String(str);
    let pad = "";
    for (let i = length - str.length; i > 0; i >>>= 1, pad += padChar)
      if (i & 1) str = padChar + str;
    return str;
  }

  fromParts(t, e, r, n, i, s) {
    this.version = (r >> 12) & 15;
    this.hex =
      T.paddedString(t.toString(16), 8) + "-" +
      T.paddedString(e.toString(16), 4) + "-" +
      T.paddedString(r.toString(16), 4) + "-" +
      T.paddedString(n.toString(16), 2) +
      T.paddedString(i.toString(16), 2) + "-" +
      T.paddedString(s.toString(16), 12);
    return this;
  }

  toString() {
    return this.hex;
  }

  toURN() {
    return "urn:uuid:" + this.hex;
  }

  toBytes() {
    const parts = this.hex.split("-");
    const result = [];
    let r = 0;
    for (const part of parts) {
      for (let i = 0; i < part.length; i += 2) {
        result[r++] = parseInt(part.substr(i, 2), 16);
      }
    }
    return result;
  }

  equals(t) {
    return t instanceof T && this.hex === t.hex;
  }

  static getTimeFieldValues(time) {
    const t = time - Date.UTC(1582, 9, 15);
    const r = (t / 4294967296) * 1e4 & 0xfffffff;
    return {
      low: ((t * 1e4) & 0xffffffff) >>> 0,
      mid: r & 0xffff,
      hi: r >>> 16,
      timestamp: t
    };
  }

  static _create4() {
    return new T().fromParts(
      this.randomUI32(),
      this.randomUI16(),
      0x4000 | this.randomUI12(),
      0x80 | this.randomUI06(),
      this.randomUI08(),
      this.randomUI48()
    );
  }

  static _create1() {
    let t = Date.now();
    let e = this.randomUI14();
    let r = 1099511627776 * (1 | this.randomUI08()) + this.randomUI40();
    let n = this.randomUI04();
    let i = 0;

    if (t !== i) {
      if (t < i) e++;
      i = t;
      n = this.randomUI04();
    } else if (Math.random() < 0.25 && n < 9984) {
      n += 1 + this.randomUI04();
    } else {
      e++;
    }

    const s = this.getTimeFieldValues(i);
    const a = s.low + n;
    const o = (s.hi & 0xfff) | 0x1000;
    const u = ((e & 0x3fff) >>> 8) | 0x80;
    const h = e & 0xff;

    return new T().fromParts(a, s.mid, o, u, h, r);
  }

  static create(version = 4) {
    return this["_create" + version]();
  }

  static fromTime(t, fill = false) {
    const r = this.getTimeFieldValues(t);
    const n = r.low;
    const i = (r.hi & 0xfff) | 0x1000;
    return !fill
      ? new T().fromParts(n, r.mid, i, 0, 0, 0)
      : new T().fromParts(n, r.mid, i, 0x80 | this.limitUI06, this.limitUI08 - 1, this.limitUI48 - 1);
  }

  static firstFromTime(t) {
    return this.fromTime(t, false);
  }

  static lastFromTime(t) {
    return this.fromTime(t, true);
  }

  static fromURN(str) {
    const match = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(str);
    if (!match) return null;
    return new T().fromParts(
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16),
      parseInt(match[4], 16),
      parseInt(match[5], 16),
      parseInt(match[6], 16)
    );
  }

  static fromBytes(bytes) {
    if (bytes.length < 5) return null;
    let hex = "";
    let r = 0;
    const parts = [4, 2, 2, 2, 6];
    for (const len of parts) {
      for (let i = 0; i < len; i++) {
        let h = bytes[r++].toString(16);
        if (h.length === 1) h = "0" + h;
        hex += h;
      }
      if (len !== 6) hex += "-";
    }
    return this.fromURN(hex);
  }

  static fromBinary(bin) {
    const bytes = [];
    for (let i = 0; i < bin.length; i++) {
      const byte = bin.charCodeAt(i);
      if (byte > 255 || byte < 0) throw new Error("Unexpected byte in binary data.");
      bytes[i] = byte;
    }
    return this.fromBytes(bytes);
  }

  static new() {
    return this.create(4);
  }

  static newTS() {
    return this.create(1);
  }
}

