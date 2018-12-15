/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
'document' in self &&
  ('classList' in document.createElement('_') &&
  (!document.createElementNS ||
    'classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))
    ? !(function() {
        'use strict'
        let t = document.createElement('_')
        if ((t.classList.add('c1', 'c2'), !t.classList.contains('c2'))) {
          let e = function(t) {
            let e = DOMTokenList.prototype[t]
            DOMTokenList.prototype[t] = function(t) {
              let n,
                i = arguments.length
              for (n = 0; i > n; n++) (t = arguments[n]), e.call(this, t)
            }
          }
          e('add'), e('remove')
        }
        if ((t.classList.toggle('c3', !1), t.classList.contains('c3'))) {
          let n = DOMTokenList.prototype.toggle
          DOMTokenList.prototype.toggle = function(t, e) {
            return 1 in arguments && !this.contains(t) == !e
              ? e
              : n.call(this, t)
          }
        }
        t = null
      })()
    : !(function(t) {
        'use strict'
        if ('Element' in t) {
          let e = 'classList',
            n = 'prototype',
            i = t.Element[n],
            s = Object,
            r =
              String[n].trim ||
              function() {
                return this.replace(/^\s+|\s+$/g, '')
              },
            o =
              Array[n].indexOf ||
              function(t) {
                for (let e = 0, n = this.length; n > e; e++)
                  if (e in this && this[e] === t) return e
                return -1
              },
            c = function(t, e) {
              ;(this.name = t),
                (this.code = DOMException[t]),
                (this.message = e)
            },
            a = function(t, e) {
              if ('' === e)
                throw new c(
                  'SYNTAX_ERR',
                  'An invalid or illegal string was specified'
                )
              if (/\s/.test(e))
                throw new c(
                  'INVALID_CHARACTER_ERR',
                  'String contains an invalid character'
                )
              return o.call(t, e)
            },
            l = function(t) {
              for (
                let e = r.call(t.getAttribute('class') || ''),
                  n = e ? e.split(/\s+/) : [],
                  i = 0,
                  s = n.length;
                s > i;
                i++
              )
                this.push(n[i])
              this._updateClassName = function() {
                t.setAttribute('class', this.toString())
              }
            },
            u = (l[n] = []),
            h = function() {
              return new l(this)
            }
          if (
            ((c[n] = Error[n]),
            (u.item = function(t) {
              return this[t] || null
            }),
            (u.contains = function(t) {
              return (t += ''), -1 !== a(this, t)
            }),
            (u.add = function() {
              let t,
                e = arguments,
                n = 0,
                i = e.length,
                s = !1
              do (t = e[n] + ''), -1 === a(this, t) && (this.push(t), (s = !0))
              while (++n < i)
              s && this._updateClassName()
            }),
            (u.remove = function() {
              let t,
                e,
                n = arguments,
                i = 0,
                s = n.length,
                r = !1
              do
                for (t = n[i] + '', e = a(this, t); -1 !== e; )
                  this.splice(e, 1), (r = !0), (e = a(this, t))
              while (++i < s)
              r && this._updateClassName()
            }),
            (u.toggle = function(t, e) {
              t += ''
              let n = this.contains(t),
                i = n ? e !== !0 && 'remove' : e !== !1 && 'add'
              return i && this[i](t), e === !0 || e === !1 ? e : !n
            }),
            (u.toString = function() {
              return this.join(' ')
            }),
            s.defineProperty)
          ) {
            let f = { get: h, enumerable: !0, configurable: !0 }
            try {
              s.defineProperty(i, e, f)
            } catch (d) {
              ;(void 0 !== d.number && -2146823252 !== d.number) ||
                ((f.enumerable = !1), s.defineProperty(i, e, f))
            }
          } else s[n].__defineGetter__ && i.__defineGetter__(e, h)
        }
      })(self))