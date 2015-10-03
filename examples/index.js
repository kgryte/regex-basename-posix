'use strict';

var re = require( './../lib' );

var base;

base = re.exec( 'index.js' )[ 1 ];
console.log( base );
// returns 'index.js'

base = re.exec( '/foo/bar/home.html' )[ 1 ];
console.log( base );
// returns 'home.html'

base = re.exec( 'foo/file.pdf' )[ 1 ];
console.log( base );
// returns 'file.pdf'

base = re.exec( 'beep.' )[ 1 ];
console.log( base );
// returns 'beep.'

base = re.exec( '' )[ 1 ];
console.log( base );
// returns ''

base = re.exec( '/foo/bar/file' )[ 1 ];
console.log( base );
// returns 'file'

base = re.exec( '/foo/bar/.gitignore' )[ 1 ];
console.log( base );
// returns '.gitignore'
