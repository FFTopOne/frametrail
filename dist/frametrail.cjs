function _M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE2Ok.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array([4,65,1,1,0]);
function _M0DTPC16result6ResultGisE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGisE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzsE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGziE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGziE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGziE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGziE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGusE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGusE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE2Ok.prototype.$tag = 1;
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB21int64__to__string__js = (num, radix) => BigInt.asIntN(64, num).toString(radix);
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const $bytes_literal$1 = new Uint8Array();
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
const _M0FPC13env19get__cli__args__ffi = function() {
  if (typeof process !== "undefined" && typeof process.argv !== "undefined") {
    return process.argv;
  } else {
    return [];
  }
 };
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP28FFTopOne10frametrail7Decoder(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.max_encoded = param0;
  this.buffer = param1;
  this.offset = param2;
  this.start = param3;
  this.dropping = param4;
  this.closed = param5;
  this.feeding = param6;
  this.frames = param7;
  this.rejected = param8;
  this.empty_delimiters = param9;
  this.peak = param10;
}
function _M0TP28FFTopOne10frametrail5Stats(param0, param1, param2, param3, param4) {
  this.bytes_in = param0;
  this.frames = param1;
  this.rejected = param2;
  this.empty_delimiters = param3;
  this.peak_buffered = param4;
}
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP28FFTopOne10frametrail5Event5Frame(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP28FFTopOne10frametrail5Event5Frame.prototype.$tag = 0;
function _M0DTP28FFTopOne10frametrail5Event8Rejected(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP28FFTopOne10frametrail5Event8Rejected.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE2Ok.prototype.$tag = 1;
const _M0FP48FFTopOne10frametrail3cmd4main15read__hex__file = (path) => {
   try {
     const fs = require('node:fs');
     if (!fs.statSync(path).isFile() || fs.statSync(path).size > 4194304) return undefined;
     return fs.readFileSync(path, 'utf8');
   } catch (_) { return undefined; }
 };
const _M0FP48FFTopOne10frametrail3cmd4main9set__exit = (code) => { process.exitCode = code; };
const $bytes_literal$2 = new Uint8Array([84,69,77,80,61,50,51,46,53]);
const $bytes_literal$3 = new Uint8Array([84,69,77,80,61,50,51,46,54]);
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE = 0;
const _M0FP28FFTopOne10frametrail7to__hexN6digitsS42 = "0123456789ABCDEF";
const _M0MP28FFTopOne10frametrail7Decoder11new_2einnerN6constrS330 = new _M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE3Err("max_encoded must be in 1..1048576");
const _M0FP017____moonbit__mainN7_2abindS70 = $bytes_literal$0;
const _M0FP48FFTopOne10frametrail3cmd4main13parse__optionN6constrS104 = new _M0DTPC16result6ResultGisE3Err("options must be positive decimal integers");
const _M0FP48FFTopOne10frametrail3cmd4main13parse__optionN6constrS105 = new _M0DTPC16result6ResultGisE3Err("options must be positive decimal integers within Int32 range");
const _M0FP28FFTopOne10frametrail10parse__hexN6constrS344 = new _M0DTPC16result6ResultGzsE3Err("invalid hex character");
const _M0FP28FFTopOne10frametrail10parse__hexN6constrS345 = new _M0DTPC16result6ResultGzsE3Err("odd number of hex digits");
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP28FFTopOne10frametrail12cobs__decodeN6constrS331 = new _M0DTPC16result6ResultGziE3Err(0);
const _M0FP28FFTopOne10frametrail14decode__packetN6constrS332 = new _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE3Err(0);
const _M0FP28FFTopOne10frametrail14decode__packetN6constrS333 = new _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE3Err(1);
const _M0FP28FFTopOne10frametrail14decode__packetN6constrS334 = new _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE3Err(2);
const _M0MP28FFTopOne10frametrail7Decoder10feed__eachN6constrS337 = new _M0DTPC16result6ResultGusE3Err("decoder is already feeding");
const _M0MP28FFTopOne10frametrail7Decoder10feed__eachN6constrS338 = new _M0DTPC16result6ResultGusE3Err("decoder is closed");
const _M0FP28FFTopOne10frametrail14replay_2einnerN6constrS346 = new _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE3Err("chunk_size must be positive");
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038((b / _p | 0) & 255));
  const _p$2 = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function _M0MPC16uint166UInt168to__char(self) {
  _L: {
    if (self >= 0 && self <= 55295) {
      break _L;
    } else {
      if (self >= 57344) {
        break _L;
      } else {
        return -1;
      }
    }
  }
  return self;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  const _p = self + 0;
  const _p$2 = undefined;
  return new _M0DTPB4Json6Number(_p, _p$2);
}
function _M0IPC15int645Int64PB6ToJson8to__json(self) {
  const _p = _M0MPC15int645Int6418to__string_2einner(self, 10);
  return new _M0DTPB4Json6String(_p);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _p$4;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPB18UninitializedArray19unsafe__blit__fixedGsE(dst, dst_offset, src, src_offset, len) {
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _tmp$2 = dst_offset + i | 0;
      const _tmp$3 = src_offset + i | 0;
      if (_tmp$2 >>> 0 < dst.length) {
        dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
      } else {
        $oob();
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0FPB7printlnGsE(input) {
  console.log(input);
}
function _M0MPC15bytes5Bytes21clamped__view_2einner(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  return new _M0TPC15bytes9BytesView(self, lo, lo + count | 0);
}
function _M0MPC15array10FixedArray17blit__from__bytes(self, bytes_offset, src, src_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (src_offset >= 0 && e2 < len2)))) {
    _M0MPC15array10FixedArray12unsafe__blitGyE(self, bytes_offset, src, src_offset, length);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15bytes9BytesView9to__owned(self) {
  if ((self.end - self.start | 0) === self.buf.length) {
    return self.buf;
  }
  const bytes = $makebytes(self.end - self.start | 0, 0);
  _M0MPC15array10FixedArray17blit__from__bytes(bytes, 0, self.buf, self.start, self.end - self.start | 0);
  return bytes;
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$1;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGyE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGyE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array18from__fixed__arrayGsE(arr) {
  const len = arr.length;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGsE(arr, len, len, 0, 0);
}
function _M0MPC15array5Array5clearGyE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGyE(self, 0);
}
function _M0FPC13env24get__cli__args__internal() {
  return _M0MPC15array5Array18from__fixed__arrayGsE(_M0FPC13env19get__cli__args__ffi());
}
function _M0FPC13env4args() {
  return _M0FPC13env24get__cli__args__internal();
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      let _tmp$2;
      const _p = 34;
      if (code === _p) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        const _p$2 = 92;
        if (code === _p$2) {
          _tmp$3 = true;
        } else {
          let _tmp$4;
          if (code < 32) {
            _tmp$4 = true;
          } else {
            let _tmp$5;
            if (escape_slash) {
              const _p$3 = 47;
              _tmp$5 = code === _p$3;
            } else {
              _tmp$5 = false;
            }
            _tmp$4 = _tmp$5;
          }
          _tmp$3 = _tmp$4;
        }
        _tmp$2 = _tmp$3;
      }
      if (_tmp$2) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, code);
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGsE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGsE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.length === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0IP28FFTopOne10frametrail5StatsPB6ToJson8to__json(_x_90) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  _M0MPB3Map3setGsRPB4JsonE($36$map, "bytes_in", _M0IPC15int645Int64PB6ToJson8to__json(_x_90.bytes_in));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "frames", _M0IPC15int645Int64PB6ToJson8to__json(_x_90.frames));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "rejected", _M0IPC15int645Int64PB6ToJson8to__json(_x_90.rejected));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "empty_delimiters", _M0IPC15int645Int64PB6ToJson8to__json(_x_90.empty_delimiters));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "peak_buffered", _M0IPC13int3IntPB6ToJson8to__json(_x_90.peak_buffered));
  return new _M0DTPB4Json6Object($36$map);
}
function _M0MP28FFTopOne10frametrail7Decoder11new_2einner(max_encoded) {
  if (max_encoded < 1 || max_encoded > 1048576) {
    return _M0MP28FFTopOne10frametrail7Decoder11new_2einnerN6constrS330;
  }
  return new _M0DTPC16result6ResultGRP28FFTopOne10frametrail7DecodersE2Ok(new _M0TP28FFTopOne10frametrail7Decoder(max_encoded, [], 0n, 0n, false, false, false, 0n, 0n, 0n, 0));
}
function _M0MP28FFTopOne10frametrail7Decoder5stats(self) {
  return new _M0TP28FFTopOne10frametrail5Stats(self.offset, self.frames, self.rejected, self.empty_delimiters, self.peak);
}
function _M0FP28FFTopOne10frametrail12cobs__decode(data) {
  if (data.length === 0) {
    return _M0FP28FFTopOne10frametrail12cobs__decodeN6constrS331;
  }
  const out = [];
  let i = 0;
  while (true) {
    if (i < data.length) {
      const start = i;
      const _tmp = i;
      const code = _tmp >>> 0 < data.length ? data[_tmp] : $oob();
      if (code === 0 || code > (data.length - i | 0)) {
        return new _M0DTPC16result6ResultGziE3Err(i);
      }
      i = i + 1 | 0;
      let _tmp$2 = 1;
      while (true) {
        const _ = _tmp$2;
        if (_ < code) {
          const _tmp$3 = i;
          const _p = _tmp$3 >>> 0 < data.length ? data[_tmp$3] : $oob();
          const _p$2 = 0;
          if (_p === _p$2) {
            return new _M0DTPC16result6ResultGziE3Err(i);
          }
          const _tmp$4 = i;
          _M0MPC15array5Array4pushGyE(out, _tmp$4 >>> 0 < data.length ? data[_tmp$4] : $oob());
          i = i + 1 | 0;
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (code < 255 && i < data.length) {
        _M0MPC15array5Array4pushGyE(out, 0);
      }
      if (i <= start) {
        return new _M0DTPC16result6ResultGziE3Err(start);
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGziE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0FP28FFTopOne10frametrail5crc16(data) {
  let crc = 65535;
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const byte = data[_];
      crc = crc ^ byte << 8;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < 8) {
          crc = (crc & 32768) !== 0 ? (crc << 1 ^ 4129) & 65535 : crc << 1 & 65535;
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return crc;
}
function _M0FP28FFTopOne10frametrail14decode__packet(data) {
  const _bind = _M0FP28FFTopOne10frametrail12cobs__decode(data);
  let raw;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    raw = _Ok._0;
  } else {
    return _M0FP28FFTopOne10frametrail14decode__packetN6constrS332;
  }
  const n = raw.length;
  if (n < 2) {
    return _M0FP28FFTopOne10frametrail14decode__packetN6constrS333;
  }
  const payload = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(raw, 0, n - 2 | 0));
  const _tmp = n - 2 | 0;
  const _tmp$2 = (_tmp >>> 0 < raw.length ? raw[_tmp] : $oob()) << 8;
  const _tmp$3 = n - 1 | 0;
  const expected = _tmp$2 | (_tmp$3 >>> 0 < raw.length ? raw[_tmp$3] : $oob());
  if (_M0FP28FFTopOne10frametrail5crc16(payload) !== expected) {
    return _M0FP28FFTopOne10frametrail14decode__packetN6constrS334;
  }
  return new _M0DTPC16result6ResultGzRP28FFTopOne10frametrail5FaultE2Ok(payload);
}
function _M0MP28FFTopOne10frametrail7Decoder10feed__each(self, chunk, emit) {
  if (self.feeding) {
    return _M0MP28FFTopOne10frametrail7Decoder10feed__eachN6constrS337;
  }
  if (self.closed) {
    return _M0MP28FFTopOne10frametrail7Decoder10feed__eachN6constrS338;
  }
  self.feeding = true;
  const _bind = chunk.end - chunk.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const byte = chunk.buf[chunk.start + _ | 0];
      let pending = undefined;
      self.offset = BigInt.asUintN(64, self.offset + 1n);
      const _p = 0;
      if (byte === _p) {
        if (self.dropping) {
          self.dropping = false;
        } else {
          const _p$2 = self.buffer;
          if (_p$2.length === 0) {
            self.empty_delimiters = BigInt.asUintN(64, self.empty_delimiters + 1n);
          } else {
            const _bind$2 = self.buffer;
            const _bind$3 = _M0FP28FFTopOne10frametrail14decode__packet(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind$2, 0, _bind$2.length)));
            if (_bind$3.$tag === 1) {
              const _Ok = _bind$3;
              const _payload = _Ok._0;
              pending = new _M0DTP28FFTopOne10frametrail5Event5Frame(self.start, self.offset, _payload);
              self.frames = BigInt.asUintN(64, self.frames + 1n);
            } else {
              const _Err = _bind$3;
              const _reason = _Err._0;
              pending = new _M0DTP28FFTopOne10frametrail5Event8Rejected(self.start, self.offset, _reason);
              self.rejected = BigInt.asUintN(64, self.rejected + 1n);
            }
          }
        }
        _M0MPC15array5Array5clearGyE(self.buffer);
        self.start = self.offset;
      } else {
        if (!self.dropping) {
          if (self.buffer.length === self.max_encoded) {
            pending = new _M0DTP28FFTopOne10frametrail5Event8Rejected(self.start, self.offset, 3);
            self.rejected = BigInt.asUintN(64, self.rejected + 1n);
            _M0MPC15array5Array5clearGyE(self.buffer);
            self.dropping = true;
          } else {
            _M0MPC15array5Array4pushGyE(self.buffer, byte);
            if (self.buffer.length > self.peak) {
              self.peak = self.buffer.length;
            }
          }
        }
      }
      const _bind$2 = pending;
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _event = _Some;
        emit(_event);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.feeding = false;
  return new _M0DTPC16result6ResultGusE2Ok(undefined);
}
function _M0MP28FFTopOne10frametrail7Decoder4feed(self, chunk) {
  const events = [];
  const _bind = _M0MP28FFTopOne10frametrail7Decoder10feed__each(self, new _M0TPC15bytes9BytesView(chunk, 0, chunk.length), (event) => {
    _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(events, event);
  });
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE3Err(_e);
  } else {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP28FFTopOne10frametrail5EventEsE2Ok(events);
  }
}
function _M0MP28FFTopOne10frametrail7Decoder6finish(self) {
  if (self.closed || self.feeding) {
    return [];
  }
  self.closed = true;
  const events = [];
  let _tmp;
  if (!self.dropping) {
    const _p = self.buffer;
    _tmp = !(_p.length === 0);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(events, new _M0DTP28FFTopOne10frametrail5Event8Rejected(self.start, self.offset, 4));
    self.rejected = BigInt.asUintN(64, self.rejected + 1n);
  }
  _M0MPC15array5Array5clearGyE(self.buffer);
  return events;
}
function _M0FP28FFTopOne10frametrail12cobs__encode(data) {
  const out = [0];
  let index = 0;
  let code = 1;
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const byte = data[_];
      const _p = 0;
      if (byte === _p) {
        _M0MPC15array5Array3setGyE(out, index, code & 255);
        index = out.length;
        _M0MPC15array5Array4pushGyE(out, 0);
        code = 1;
      } else {
        _M0MPC15array5Array4pushGyE(out, byte);
        code = code + 1 | 0;
        if (code === 255) {
          _M0MPC15array5Array3setGyE(out, index, 255);
          index = out.length;
          _M0MPC15array5Array4pushGyE(out, 0);
          code = 1;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array3setGyE(out, index, code & 255);
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length));
}
function _M0FP28FFTopOne10frametrail13encode__frame(payload) {
  const raw = [];
  const _bind = payload.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const b = payload[_];
      _M0MPC15array5Array4pushGyE(raw, b);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const crc = _M0FP28FFTopOne10frametrail5crc16(payload);
  _M0MPC15array5Array4pushGyE(raw, crc >> 8 & 255);
  _M0MPC15array5Array4pushGyE(raw, crc & 255);
  const out = [];
  const _bind$2 = _M0FP28FFTopOne10frametrail12cobs__encode(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(raw, 0, raw.length)));
  const _bind$3 = _bind$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const b = _bind$2[_];
      _M0MPC15array5Array4pushGyE(out, b);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGyE(out, 0);
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length));
}
function _M0FP28FFTopOne10frametrail10parse__hex(text) {
  const out = [];
  let high = -1;
  const _bind = text.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = text.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = text.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      _L$2: {
        const c = _decoded_char;
        if (c === 32 || (c === 9 || (c === 10 || c === 13))) {
          break _L$2;
        }
        let v;
        if (c >= 48 && c <= 57) {
          v = c - 48 | 0;
        } else {
          if (c >= 65 && c <= 70) {
            v = c - 55 | 0;
          } else {
            if (c >= 97 && c <= 102) {
              v = c - 87 | 0;
            } else {
              return _M0FP28FFTopOne10frametrail10parse__hexN6constrS344;
            }
          }
        }
        if (high < 0) {
          high = v;
        } else {
          _M0MPC15array5Array4pushGyE(out, ((Math.imul(high, 16) | 0) + v | 0) & 255);
          high = -1;
        }
        break _L$2;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  if (high >= 0) {
    return _M0FP28FFTopOne10frametrail10parse__hexN6constrS345;
  }
  return new _M0DTPC16result6ResultGzsE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0FP28FFTopOne10frametrail7to__hex(data) {
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const b = data[_];
      const n = b;
      const _tmp$2 = n >> 4;
      const _p = _M0MPC16uint166UInt168to__char(_tmp$2 >>> 0 < _M0FP28FFTopOne10frametrail7to__hexN6digitsS42.length ? _M0FP28FFTopOne10frametrail7to__hexN6digitsS42.charCodeAt(_tmp$2) : $oob());
      _M0IPB13StringBuilderPB6Logger11write__char(out, _p === -1 ? $panic() : _p);
      const _tmp$3 = n & 15;
      const _p$2 = _M0MPC16uint166UInt168to__char(_tmp$3 >>> 0 < _M0FP28FFTopOne10frametrail7to__hexN6digitsS42.length ? _M0FP28FFTopOne10frametrail7to__hexN6digitsS42.charCodeAt(_tmp$3) : $oob());
      _M0IPB13StringBuilderPB6Logger11write__char(out, _p$2 === -1 ? $panic() : _p$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0MP28FFTopOne10frametrail5Fault4code(self) {
  switch (self) {
    case 0: {
      return "MALFORMED_COBS";
    }
    case 1: {
      return "MISSING_CHECKSUM";
    }
    case 2: {
      return "CRC_MISMATCH";
    }
    case 3: {
      return "OVERSIZE";
    }
    case 4: {
      return "TRUNCATED";
    }
    default: {
      return "TIMED_OUT";
    }
  }
}
function _M0MP28FFTopOne10frametrail5Event8as__json(self) {
  if (self.$tag === 0) {
    const _Frame = self;
    const _start = _Frame._0;
    const _end = _Frame._1;
    const _payload = _Frame._2;
    const _p = "frame";
    const _tmp = { _0: "type", _1: new _M0DTPB4Json6String(_p) };
    const _p$2 = _M0MPC15int645Int6418to__string_2einner(_start, 10);
    const _tmp$2 = { _0: "start", _1: new _M0DTPB4Json6String(_p$2) };
    const _p$3 = _M0MPC15int645Int6418to__string_2einner(_end, 10);
    const _tmp$3 = { _0: "end", _1: new _M0DTPB4Json6String(_p$3) };
    const _p$4 = _M0FP28FFTopOne10frametrail7to__hex(_payload);
    const _bind = [_tmp, _tmp$2, _tmp$3, { _0: "payload_hex", _1: new _M0DTPB4Json6String(_p$4) }, { _0: "payload_bytes", _1: _M0IPC13int3IntPB6ToJson8to__json(_payload.length) }];
    const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 5), undefined);
    return new _M0DTPB4Json6Object(_p$5);
  } else {
    const _Rejected = self;
    const _start = _Rejected._0;
    const _end = _Rejected._1;
    const _reason = _Rejected._2;
    const _p = "rejected";
    const _tmp = { _0: "type", _1: new _M0DTPB4Json6String(_p) };
    const _p$2 = _M0MPC15int645Int6418to__string_2einner(_start, 10);
    const _tmp$2 = { _0: "start", _1: new _M0DTPB4Json6String(_p$2) };
    const _p$3 = _M0MPC15int645Int6418to__string_2einner(_end, 10);
    const _tmp$3 = { _0: "end", _1: new _M0DTPB4Json6String(_p$3) };
    const _p$4 = _M0MP28FFTopOne10frametrail5Fault4code(_reason);
    const _bind = [_tmp, _tmp$2, _tmp$3, { _0: "code", _1: new _M0DTPB4Json6String(_p$4) }];
    const _p$5 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 4), undefined);
    return new _M0DTPB4Json6Object(_p$5);
  }
}
function _M0FP28FFTopOne10frametrail14replay_2einner(data, chunk_size, max_encoded) {
  if (chunk_size < 1) {
    return _M0FP28FFTopOne10frametrail14replay_2einnerN6constrS346;
  }
  const _bind = _M0MP28FFTopOne10frametrail7Decoder11new_2einner(max_encoded);
  let decoder;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    decoder = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    return new _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE3Err(_e);
  }
  const events = [];
  let pos = 0;
  while (true) {
    if (pos < data.length) {
      const count = chunk_size < (data.length - pos | 0) ? chunk_size : data.length - pos | 0;
      const _bind$2 = _M0MP28FFTopOne10frametrail7Decoder4feed(decoder, _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(data, pos, pos + count | 0)));
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        const _batch = _Ok._0;
        const _bind$3 = _batch.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$3) {
            const e = _batch[_];
            _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(events, e);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        const _Err = _bind$2;
        const _e = _Err._0;
        return new _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE3Err(_e);
      }
      pos = pos + count | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = _M0MP28FFTopOne10frametrail7Decoder6finish(decoder);
  const _bind$3 = _bind$2.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const e = _bind$2[_];
      _M0MPC15array5Array4pushGRP28FFTopOne10frametrail5EventE(events, e);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGURPB5ArrayGRP28FFTopOne10frametrail5EventERP28FFTopOne10frametrail5StatsEsE2Ok({ _0: events, _1: _M0MP28FFTopOne10frametrail7Decoder5stats(decoder) });
}
function _M0FP48FFTopOne10frametrail3cmd4main4fail(message) {
  const _bind = [{ _0: "error", _1: new _M0DTPB4Json6String(message) }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1), undefined);
  const json = new _M0DTPB4Json6Object(_p);
  _M0FPB7printlnGsE(_M0MPC14json4Json17stringify_2einner(json, false, 0, undefined));
  _M0FP48FFTopOne10frametrail3cmd4main9set__exit(2);
}
function _M0FP48FFTopOne10frametrail3cmd4main6report(data, chunk, limit) {
  const _bind = _M0FP28FFTopOne10frametrail14replay_2einner(data, chunk, limit);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _e = _Err._0;
    _M0FP48FFTopOne10frametrail3cmd4main4fail(_e);
    return;
  } else {
    const _Ok = _bind;
    const _x = _Ok._0;
    const _events = _x._0;
    const _stats = _x._1;
    const _p = "frametrail-cobs-crc16-v1";
    const _tmp = { _0: "profile", _1: new _M0DTPB4Json6String(_p) };
    const _p$2 = new Array(_events.length);
    const _p$3 = _events.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$4 = _tmp$2;
      if (_p$4 < _p$3) {
        const _p$5 = _events[_p$4];
        _p$2[_p$4] = _M0MP28FFTopOne10frametrail5Event8as__json(_p$5);
        _tmp$2 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$2 = [_tmp, { _0: "events", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(_p$2) }, { _0: "stats", _1: _M0IP28FFTopOne10frametrail5StatsPB6ToJson8to__json(_stats) }];
    const _p$4 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 3), undefined);
    const report = new _M0DTPB4Json6Object(_p$4);
    _M0FPB7printlnGsE(_M0MPC14json4Json17stringify_2einner(report, false, 2, undefined));
    _M0FP48FFTopOne10frametrail3cmd4main9set__exit(BigInt.asIntN(64, _stats.rejected) > BigInt.asIntN(64, 0n) ? 1 : 0);
    return;
  }
}
function _M0FP48FFTopOne10frametrail3cmd4main13parse__option(args, index, fallback) {
  if (args.length <= index) {
    return new _M0DTPC16result6ResultGisE2Ok(fallback);
  }
  const text = _M0MPC15array5Array2atGsE(args, index);
  if (text === "") {
    return _M0FP48FFTopOne10frametrail3cmd4main13parse__optionN6constrS104;
  }
  let value = 0;
  const _bind = text.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = text.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = text.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const n = _decoded_char - 48 | 0;
      if (n < 0 || (n > 9 || value > ((2147483647 - n | 0) / 10 | 0))) {
        return _M0FP48FFTopOne10frametrail3cmd4main13parse__optionN6constrS105;
      }
      value = (Math.imul(value, 10) | 0) + n | 0;
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGisE2Ok(value);
}
(() => {
  const argv = _M0FPC13env4args();
  const _p = argv.length - 2 | 0;
  let args;
  if (_p <= 0) {
    args = [];
  } else {
    const _p$2 = new Array(_p);
    let _tmp = 0;
    while (true) {
      const _p$3 = _tmp;
      if (_p$3 < _p) {
        _p$2[_p$3] = _M0MPC15array5Array2atGsE(argv, _p$3 + 2 | 0);
        _tmp = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    args = _p$2;
  }
  if (args.length === 0 || (_M0MPC15array5Array2atGsE(args, 0) === "help" || _M0MPC15array5Array2atGsE(args, 0) === "--help")) {
    _M0FPB7printlnGsE("FrameTrail 0.1.0\nencode HEX\ndecode HEX [CHUNK_BYTES=16] [MAX_ENCODED=4096]\nreplay HEX_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]\ndemo\nExit: 0 clean, 1 rejected frame, 2 input error. JSON offsets are zero-based, end-exclusive decimal strings.");
    return;
  }
  if (_M0MPC15array5Array2atGsE(args, 0) === "demo" && args.length === 1) {
    const bytes = [];
    const _bind = _M0FP28FFTopOne10frametrail13encode__frame($bytes_literal$2);
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const b = _bind[_];
        _M0MPC15array5Array4pushGyE(bytes, b);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = _M0FP017____moonbit__mainN7_2abindS70.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$3) {
        const b = _M0FP017____moonbit__mainN7_2abindS70[_];
        _M0MPC15array5Array4pushGyE(bytes, b);
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = _M0FP28FFTopOne10frametrail13encode__frame($bytes_literal$3);
    const _bind$5 = _bind$4.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$5) {
        const b = _bind$4[_];
        _M0MPC15array5Array4pushGyE(bytes, b);
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0FP48FFTopOne10frametrail3cmd4main6report(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(bytes, 0, bytes.length)), 3, 4096);
    return;
  }
  if (args.length < 2 || args.length > 4) {
    _M0FP48FFTopOne10frametrail3cmd4main4fail("expected encode, decode or replay; use help");
    return;
  }
  const command = _M0MPC15array5Array2atGsE(args, 0);
  let _tmp;
  const _p$2 = "encode";
  if (!(command === _p$2)) {
    let _tmp$2;
    const _p$3 = "decode";
    if (!(command === _p$3)) {
      const _p$4 = "replay";
      _tmp$2 = !(command === _p$4);
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    _M0FP48FFTopOne10frametrail3cmd4main4fail("unknown command; use help");
    return;
  }
  if (command === "encode" && args.length !== 2) {
    _M0FP48FFTopOne10frametrail3cmd4main4fail("encode accepts exactly one hex string");
    return;
  }
  let source;
  if (command === "replay") {
    const _bind = _M0FP48FFTopOne10frametrail3cmd4main15read__hex__file(_M0MPC15array5Array2atGsE(args, 1));
    if (_bind === undefined) {
      _M0FP48FFTopOne10frametrail3cmd4main4fail("cannot read regular UTF-8 hex file (limit 4 MiB)");
      return;
    } else {
      const _Some = _bind;
      source = _Some;
    }
  } else {
    source = _M0MPC15array5Array2atGsE(args, 1);
  }
  const _bind = _M0FP28FFTopOne10frametrail10parse__hex(source);
  let data;
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    data = _Ok._0;
  } else {
    const _Err = _bind;
    const _e = _Err._0;
    _M0FP48FFTopOne10frametrail3cmd4main4fail(_e);
    return;
  }
  if (command === "encode") {
    _M0FPB7printlnGsE(_M0FP28FFTopOne10frametrail7to__hex(_M0FP28FFTopOne10frametrail13encode__frame(data)));
    return;
  }
  const _bind$2 = _M0FP48FFTopOne10frametrail3cmd4main13parse__option(args, 2, 16);
  let chunk;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    chunk = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _e = _Err._0;
    _M0FP48FFTopOne10frametrail3cmd4main4fail(_e);
    return;
  }
  const _bind$3 = _M0FP48FFTopOne10frametrail3cmd4main13parse__option(args, 3, 4096);
  let limit;
  if (_bind$3.$tag === 1) {
    const _Ok = _bind$3;
    limit = _Ok._0;
  } else {
    const _Err = _bind$3;
    const _e = _Err._0;
    _M0FP48FFTopOne10frametrail3cmd4main4fail(_e);
    return;
  }
  _M0FP48FFTopOne10frametrail3cmd4main6report(data, chunk, limit);
})();
