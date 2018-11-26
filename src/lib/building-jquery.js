// watch out i think there's bad characters here!
const moduleList = `-ajax
-event
-effects
-css/adjustCSS
-css/curCSS
-css/showHide
-css/support
-css/var/cssExpand
-css/var/getStyles
-css/var/isHiddenWithinTree
-css/var/rboxStyle
-css/var/rnumnonpx
-css/var/swap
-dimensions
-offset
-deprecated
-wrap
-core/ready
-deferred
-queue
-exports/amd`;

console.log(moduleList.replace(' ', '').split('\n').join(','));
