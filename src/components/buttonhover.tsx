// @mixin prefixed($property, $value) {
//     @if $webkit == true {
//       -webkit-#{$property}: #{$value};
//     }
  
//     @if $moz == true {
//       -moz-#{$property}: #{$value};
//     }
  
//     @if $ms == true {
//       -ms-#{$property}: #{$value};
//     }
  
//     @if $o == true {
//       -o-#{$property}: #{$value};
//     }
  
//     #{$property}: #{$value};
//   }
  
//   // prefix keyframes
//   @mixin keyframes($name) {
//     @if $webkit == true {
//       @-webkit-keyframes #{$name} {
//         @content;
//       }
//     }
  
//     @if $moz == true {
//       @-moz-keyframes #{$name} {
//         @content;
//       }
//     }
  
//     @if $ms == true {
//       @-ms-keyframes #{$name} {
//         @content;
//       }
//     }
  
//     @if $o == true {
//       @-o-keyframes #{$name} {
//         @content;
//       }
//     }
  
//     @keyframes #{$name} {
//       @content;
//     }
//   }


// @mixin bounce-to-right {
// 	@include hacks();
// 	position: relative;
// 	@include prefixed(transition-property, color);
// 	@include prefixed(transition-duration, $slowDuration);

// 	&:before {
// 		content: "";
// 		position: absolute;
// 		z-index: -1;
// 		top: 0;
// 		left: 0;
// 		right: 0;
// 		bottom: 0;
// 		background: $activeColor;
// 		@include prefixed(transform, scaleX(0));
// 		@include prefixed(transform-origin, 0 50%);
// 		@include prefixed(transition-property, transform);
// 		@include prefixed(transition-duration, $slowDuration);
// 		@include prefixed(transition-timing-function, ease-out);
// 	}

// 	&:hover,
// 	&:focus,
// 	&:active {
// 		color: white;

// 		&:before {
// 			@include prefixed(transform, scaleX(1));
// 			@include prefixed(transition-timing-function, cubic-bezier(.52,1.64,.37,.66));
// 		}
// 	}
// }