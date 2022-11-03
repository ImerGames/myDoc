(function() {
    'use strict';
    var _0xb9d3x1 = [];
    var _0xb9d3x2 = [];
    var _0xb9d3x3 = document['createElement']('link');
    _0xb9d3x3['rel'] = 'stylesheet';
    _0xb9d3x3['href'] = '../css/custom-player.css';
    _0xb9d3x3['type'] = 'text/css';
    document['getElementsByTagName']('head')[0]['appendChild'](_0xb9d3x3);
    var _0xb9d3x4 = document['createElement']('style');
    _0xb9d3x4['media'] = 'screen';
    var _0xb9d3x5 = 'img.p3-yesstreaming {display: block!important; visibility: visible!important;}';
    _0xb9d3x4['appendChild'](document['createTextNode'](_0xb9d3x5));
    document['getElementsByTagName']('head')[0]['appendChild'](_0xb9d3x4);
    console['log'](_0xb9d3x4);
    
    window['player3'] = null;
    function _0xb9d3x6(_0xb9d3x7, _0xb9d3x8) {
        this['conf'] = {
            target: null,
            url: null,
            platform: 'sc',
            mountPoint: 'stream',
            sid: 1,
            volume: 0.75,
            logo: 'https://www.yesstreaming.com/img/default.png',
            artwork: 1,
            bg: '#e81717',
            btns: '#ffffff',
            songtitle: '#ffffff',
            artist: '#f8bab0',
            cors: 'https://cors1.yesstreaming.net/',
            src: ''
        };
        this['cls'] = {
            wrapper: 'p3-wrapper',
            player: 'p3-player',
            artwork: 'p3-artwork',
            metadata: 'p3-metadata',
            controls: 'p3-controls',
            artistInfo: 'p3-artistInfo',
            songtitle: 'p3-title',
            artistName: 'p3-artist',
            stationName: 'p3-station',
            ppBtn: 'p3-ppBtn material-icons playBtn',
            volSlider: 'p3-volSlider',
            volSliderBar: 'p3-volSliderBar',
            volIcon: 'p3-volIcon material-icons p3-vol3',
            listIcon: 'p3-listIcon material-icons',
            yess: 'p3-yesstreaming'
        };
        for (var _0xb9d3x9 in this['conf']) {
            if (_0xb9d3x7['hasOwnProperty'](_0xb9d3x9)) {
                this['conf'][_0xb9d3x9] = _0xb9d3x7[_0xb9d3x9]
            }
        };
        this['init']()
    }
    _0xb9d3x6['prototype'] = {
        init: function() {
            if (typeof this['conf']['target'] === 'object') {
                this['input'] = this['conf']['target']
            } else {
                this['input'] = document['getElementById'](this['conf']['target']['replace']('#', ''))
            };
            if (!this['input']) {
                return console['log']('Cannot find target element...')
            };
            this['createPlayer']();
            var _0xb9d3xa = this,
                _0xb9d3xb = this['conf'];
            var _0xb9d3x4 = document['createElement']('style');
            _0xb9d3x4['type'] = 'text/css';
            var _0xb9d3x5 = '.p3-controls input[type=range]::-webkit-slider-thumb {background-color: ' + _0xb9d3xb['btns'] + '}';
            _0xb9d3x4['appendChild'](document['createTextNode'](_0xb9d3x5));
            document['getElementsByTagName']('head')[0]['appendChild'](_0xb9d3x4);
            if (_0xb9d3xb['platform'] === 'sc') {
                var _0xb9d3xc = _0xb9d3xb['url'] + '/' + _0xb9d3xb['mountPoint'],
                    _0xb9d3xd = _0xb9d3xb['cors'] + _0xb9d3xb['url'] + '/stats?sid=' + _0xb9d3xb['sid'] + '&json=1'
            } else {
                if (_0xb9d3xb['platform'] === 'ic') {
                    var _0xb9d3xc = _0xb9d3xb['url'] + '/' + _0xb9d3xb['mountPoint'],
                        _0xb9d3xd = _0xb9d3xb['cors'] + _0xb9d3xb['url'] + '/status-json.xsl'
                }
            };
            this['audio'] = document['createElement']('audio');
            this['audio']['src'] = _0xb9d3xc;
            this['audio']['load']();
            this['audio']['volume'] = _0xb9d3xb['volume'];
            _0xb9d3x1['push'](this['audio']);
            _0xb9d3x2['push'](this['conf']['target']['replace']('#', ''));
            this['player']['style']['backgroundColor'] = _0xb9d3xb['bg'];
            this['artistInfo']['style']['color'] = _0xb9d3xb['artist'];
            this['songtitle']['style']['color'] = _0xb9d3xb['songtitle'];
            this['artwork']['style']['backgroundImage'] = 'url("' + _0xb9d3xb['logo'] + '")';
            this['ppBtn']['style']['color'] = _0xb9d3xb['btns'];
            this['volIcon']['style']['color'] = _0xb9d3xb['btns'];
            this['volSliderBar']['style']['backgroundColor'] = _0xb9d3xb['btns'];
            this['ppBtn']['onclick'] = () => {
                this['play'](_0xb9d3xc)
            };
            this['volIcon']['onclick'] = () => {
                this['volumeIcon']()
            };
            this['volSlider']['addEventListener']('input', function() {
                _0xb9d3xa['setVolume']()
            }, false);
            this['wrapper']['addEventListener']('mouseout', function() {
                var _0xb9d3xe = this['classList']['contains']('minimized');
                if (_0xb9d3xe) {
                    _0xb9d3xa['player']['classList']['remove']('pMaxWidth');
                    _0xb9d3xa['controls']['classList']['remove']('cWidthAuto');
                    _0xb9d3xa['controls']['classList']['add']('cWidth')
                }
            }, false);
            if (_0xb9d3xb['staticTitles']) {
                this['setStaticTitles']()
            } else {
                if (this['conf']['platform'] === 'sc') {
                    this['getSC'](_0xb9d3xd);
                    setInterval(function() {
                        _0xb9d3xa['getSC'](_0xb9d3xd)
                    }, 8000)
                } else {
                    if (this['conf']['platform'] === 'ic') {
                        this['getIC'](_0xb9d3xd);
                        setInterval(function() {
                            _0xb9d3xa['getIC'](_0xb9d3xd)
                        }, 8000)
                    }
                }
            };
            return this
        },
        createPlayer: function() {
            var _0xb9d3x8 = this['cls'];
            this['wrapper'] = _0xb9d3x1d('div', _0xb9d3x8['wrapper']);
            this['player'] = _0xb9d3x1d('div', _0xb9d3x8['player']);
            this['artwork'] = _0xb9d3x1d('div', _0xb9d3x8['artwork']);
            this['metadata'] = _0xb9d3x1d('div', _0xb9d3x8['metadata']);
            this['songtitle'] = _0xb9d3x1d('div', _0xb9d3x8['songtitle']);
            this['artistInfo'] = _0xb9d3x1d('div', _0xb9d3x8['artistInfo']);
            this['artistName'] = _0xb9d3x1d('span', _0xb9d3x8['artistName']);
            this['ppBtn'] = _0xb9d3x1d('div', _0xb9d3x8['ppBtn'], ['id', 'ppBtn']);
            this['controls'] = _0xb9d3x1d('div', _0xb9d3x8['controls']);
            this['volSlider'] = _0xb9d3x1d('input', _0xb9d3x8['volSlider']);
            this['volSliderBar'] = _0xb9d3x1d('div', _0xb9d3x8['volSliderBar']);
            this['volIcon'] = _0xb9d3x1d('div', _0xb9d3x8['volIcon']);
            this['yessLink'] = _0xb9d3x1d('a', _0xb9d3x8['yessLink']);
            this['yessLogo'] = _0xb9d3x1d('img', _0xb9d3x8['yess']);
            this['wrapper']['appendChild'](this['player']);
            this['player']['appendChild'](this['artwork']);
            this['player']['appendChild'](this['metadata']);
            this['metadata']['appendChild'](this['songtitle']);
            this['metadata']['appendChild'](this['artistInfo']);
            this['artistInfo']['appendChild'](this['artistName']);
            this['player']['appendChild'](this['controls']);
            this['controls']['appendChild'](this['volIcon']);
            this['controls']['appendChild'](this['volSlider']);
            this['controls']['appendChild'](this['volSliderBar']);
            this['controls']['appendChild'](this['ppBtn']);
            this['controls']['appendChild'](this['yessLink']);
            this['yessLink']['appendChild'](this['yessLogo']);
            this['volSlider']['type'] = 'range';
            this['volSlider']['min'] = 0;
            this['volSlider']['max'] = 100;
            this['volSlider']['step'] = 0.10;
            this['volSlider']['val'] = this['volume'] * 10;
            this['volSlider']['setAttribute']('value', this['conf']['volume'] * 100);
            this['volSlider']['autocomplete'] = 'off';
            this['yessLink']['setAttribute']('href', 'https://www.yesstreaming.com');
            this['yessLink']['setAttribute']('target', '_blank');
            this['yessLogo']['setAttribute']('src', 'https://www.yesstreaming.com/img/yesstreaming.png');
            this['input']['appendChild'](this['wrapper'], this['input']['nextSibling'])
        },
        play: function(_0xb9d3xc) {
            var _0xb9d3xa = this;
            if (this['ppBtn']['classList']['contains']('playing')) {
                this['ppBtn']['classList']['toggle']('playing');
                this['ppBtn']['classList']['toggle']('playBtn');
                this['ppBtn']['classList']['toggle']('pauseBtn');
                this['audio']['src'] = this['conf']['src']
            } else {
                for (var _0xb9d3x9 = 0; _0xb9d3x9 < _0xb9d3x1['length']; _0xb9d3x9++) {
                    _0xb9d3x1[_0xb9d3x9]['src'] = _0xb9d3xa['conf']['src']
                };
                for (var _0xb9d3x9 = 0; _0xb9d3x9 < _0xb9d3x2['length']; _0xb9d3x9++) {
                    var _0xb9d3xf = document['getElementById'](_0xb9d3x2[_0xb9d3x9]);
                    var _0xb9d3x10 = _0xb9d3xf['querySelector']('.p3-ppBtn');
                    _0xb9d3x10['classList']['remove']('playing');
                    _0xb9d3x10['classList']['remove']('pauseBtn');
                    _0xb9d3x10['classList']['add']('playBtn')
                };
                this['ppBtn']['classList']['toggle']('playing');
                this['ppBtn']['classList']['toggle']('playBtn');
                this['ppBtn']['classList']['toggle']('pauseBtn');
                this['audio']['src'] = _0xb9d3xc;
                this['audio']['play']()
            }
        },
        setVolume: function() {
            var _0xb9d3x11 = this['volSlider']['value'],
                _0xb9d3x12 = this['volIcon'];
            if (_0xb9d3x11 < 55 && _0xb9d3x11 > 0) {
                _0xb9d3x12['classList']['remove']('p3-vol3', 'p3-vol1');
                _0xb9d3x12['classList']['add']('p3-vol2')
            };
            if (_0xb9d3x11 == 0) {
                _0xb9d3x12['classList']['remove']('p3-vol2', 'p3-vol3');
                _0xb9d3x12['classList']['add']('p3-vol1')
            } else {
                if (_0xb9d3x11 > 55) {
                    _0xb9d3x12['classList']['remove']('p3-vol1', 'p3-vol2');
                    _0xb9d3x12['classList']['add']('p3-vol3')
                }
            };
            this['audio']['volume'] = _0xb9d3x11 / 100
        },
        volumeIcon: function() {
            var _0xb9d3x11 = this['volSlider']['value'],
                _0xb9d3x12 = this['volIcon'];
            if (_0xb9d3x12['classList']['contains']('p3-vol1')) {
                _0xb9d3x12['classList']['remove']('p3-vol', 'p3-vol2');
                _0xb9d3x12['classList']['add']('p3-vol3');
                this['audio']['volume'] = _0xb9d3x11 / 100
            } else {
                _0xb9d3x12['classList']['remove']('p3-vol2', 'p3-vol3');
                _0xb9d3x12['classList']['add']('p3-vol1');
                this['audio']['volume'] = 0
            }
        },
        getSC: function(_0xb9d3x13) {
            var _0xb9d3xa = this;
            _0xb9d3x28(_0xb9d3x13, function(_0xb9d3x14) {
                var _0xb9d3x15 = _0xb9d3x14['songtitle'];
                if (_0xb9d3x15 != _0xb9d3xa['getNP']()) {
                    _0xb9d3xa['setMeta'](_0xb9d3x14)
                }
            })
        },
        getIC: function(_0xb9d3x13) {
            var _0xb9d3xa = this;
            _0xb9d3x28(_0xb9d3x13, function(_0xb9d3x14) {
                var _0xb9d3x14 = _0xb9d3xa['findMP'](_0xb9d3x14),
                    _0xb9d3x15 = _0xb9d3x14['yp_currently_playing'] || _0xb9d3x14['title'];
                if (_0xb9d3x15 != _0xb9d3xa['getNP']()) {
                    _0xb9d3xa['setMeta'](_0xb9d3x14)
                }
            })
        },
        setMeta: function(_0xb9d3x14) {
            var _0xb9d3xa = this,
                _0xb9d3x16 = _0xb9d3x14['songtitle'] || _0xb9d3x14['yp_currently_playing'] || _0xb9d3x14['title'],
                _0xb9d3x17 = _0xb9d3x21(_0xb9d3x16),
                _0xb9d3x18 = _0xb9d3x17[0] || 'Undefined',
                _0xb9d3x19 = _0xb9d3x17[1] || 'Undefined';
            this['setNP'](_0xb9d3x16);
            this['artistName']['innerHTML'] = _0xb9d3x18;
            this['artistInfo']['classList']['add']('blink-1');
            setTimeout(function() {
                _0xb9d3xa['artistInfo']['classList']['remove']('blink-1')
            }, 3000);
            this['songtitle']['innerHTML'] = _0xb9d3x19;
            this['songtitle']['classList']['add']('blink-1');
            setTimeout(function() {
                _0xb9d3xa['songtitle']['classList']['remove']('blink-1')
            }, 3000);
            if (this['conf']['artwork'] === 1) {
                this['getAlbumInfo'](_0xb9d3x18, _0xb9d3x19)
            }
        },
        getAlbumInfo: function(_0xb9d3x18, _0xb9d3x19) {
            var _0xb9d3xa = this,
                _0xb9d3x18 = _0xb9d3x18,
                _0xb9d3x19 = _0xb9d3x19,
                _0xb9d3x18 = _0xb9d3x23(_0xb9d3x18),
                _0xb9d3x19 = _0xb9d3x23(_0xb9d3x19),
                _0xb9d3x13 = this['conf']['cors'] + 'https://api.deezer.com/search?q=artist%3A"' + _0xb9d3x18 + '" track%3A"' + _0xb9d3x19 + '"';
            _0xb9d3x13 = encodeURI(_0xb9d3x13);
            _0xb9d3x28(_0xb9d3x13, function(_0xb9d3x14) {
                if (_0xb9d3x14['data']['length'] >= 1) {
                    var _0xb9d3x1a = _0xb9d3x14['data'][0]['album']['cover_medium']
                } else {
                    var _0xb9d3x1a = _0xb9d3xa['conf']['logo']
                };
                _0xb9d3xa['setAlbumInfo'](_0xb9d3x1a)
            })
        },
        setAlbumInfo: function(_0xb9d3x1a) {
            this['artwork']['style']['backgroundImage'] = 'url("' + _0xb9d3x1a + '")'
        },
        findMP: function(_0xb9d3x1b) {
            if (_0xb9d3x1b['icestats']['source']['length'] === undefined) {
                return _0xb9d3x1b['icestats']['source']
            } else {
                for (var _0xb9d3x9 = 0; _0xb9d3x9 < _0xb9d3x1b['icestats']['source']['length']; _0xb9d3x9++) {
                    var _0xb9d3x1c = _0xb9d3x1b['icestats']['source'][_0xb9d3x9]['listenurl'];
                    if (_0xb9d3x1c['indexOf'](this['conf']['mountPoint']) >= 0) {
                        return _0xb9d3x1b['icestats']['source'][_0xb9d3x9]
                    }
                }
            }
        },
        getNP: function(_0xb9d3x1b) {
            return this['wrapper']['getAttribute']('data-np')
        },
        setNP: function(_0xb9d3x1b) {
            this['wrapper']['setAttribute']('data-np', _0xb9d3x1b)
        }
    };
    var _0xb9d3x1d = function(_0xb9d3x1e, _0xb9d3x8, _0xb9d3x1f) {
        var _0xb9d3x20 = document['createElement'](_0xb9d3x1e);
        if (_0xb9d3x8) {
            _0xb9d3x20['className'] = _0xb9d3x8
        };
        if (_0xb9d3x1f && _0xb9d3x1f['length'] === 2) {
            _0xb9d3x20['setAttribute'](_0xb9d3x1f[0], _0xb9d3x1f[1])
        };
        return _0xb9d3x20
    };
    var _0xb9d3x21 = function(_0xb9d3x1b) {
        var _0xb9d3x1b = _0xb9d3x1b,
            _0xb9d3x22 = _0xb9d3x1b['split']('-');
        return _0xb9d3x22
    };
    var _0xb9d3x23 = function(_0xb9d3x1b) {
        var _0xb9d3x1b = _0xb9d3x1b['toLowerCase'](),
            _0xb9d3x1b = _0xb9d3x1b['trim']();
        if (_0xb9d3x1b['includes']('&')) {
            _0xb9d3x1b = _0xb9d3x1b['substr'](0, _0xb9d3x1b['indexOf'](' &'))
        } else {
            if (_0xb9d3x1b['includes']('feat')) {
                _0xb9d3x1b = _0xb9d3x1b['substr'](0, _0xb9d3x1b['indexOf'](' feat'))
            } else {
                if (_0xb9d3x1b['includes']('ft.')) {
                    _0xb9d3x1b = _0xb9d3x1b['substr'](0, _0xb9d3x1b['indexOf'](' ft.'))
                } else {
                    if (_0xb9d3x1b['includes']('[')) {
                        _0xb9d3x1b = _0xb9d3x1b['substr'](0, _0xb9d3x1b['indexOf'](' ['))
                    }
                }
            }
        };
        return _0xb9d3x1b
    };
    var _0xb9d3x24 = function(_0xb9d3x13, _0xb9d3x25) {
        var _0xb9d3x26 = 'jsonp_callback_' + Math['round'](100000 * Math['random']());
        window[_0xb9d3x26] = function(_0xb9d3x14) {
            delete window[_0xb9d3x26];
            document['body']['removeChild'](_0xb9d3x27);
            _0xb9d3x25(_0xb9d3x14)
        };
        var _0xb9d3x27 = document['createElement']('script');
        _0xb9d3x27['src'] = _0xb9d3x13 + (_0xb9d3x13['indexOf']('?') >= 0 ? '&' : '?') + 'callback=' + _0xb9d3x26;
        document['body']['appendChild'](_0xb9d3x27)
    };
    var _0xb9d3x28 = function(_0xb9d3x13, _0xb9d3x25) {
        var _0xb9d3x28 = new XMLHttpRequest();
        _0xb9d3x28['onreadystatechange'] = (_0xb9d3x29) => {
            if (_0xb9d3x28['readyState'] !== 4) {
                return
            };
            if (_0xb9d3x28['status'] === 200) {
                _0xb9d3x25(JSON['parse'](_0xb9d3x28['responseText']))
            } else {
                console['warn']('request_error')
            }
        };
        _0xb9d3x28['crossOrigin'] = 'anonymous';
        _0xb9d3x28['open']('GET', _0xb9d3x13, true);
        _0xb9d3x28['send']()
    };
    window['player3'] = _0xb9d3x6
})()