(function () {
'use strict';

var utils = request.getAttribute("sitevision.utils");
var propertyUtil = utils.getPropertyUtil();
var ctxUtil = utils.getPortletContextUtil();
// Get current user
var user = ctxUtil.getCurrentUser();
var username = propertyUtil.getString(user, "name", "").toLowerCase();
var mail = propertyUtil.getString(user, "mail", "").toLowerCase();
var displayName = propertyUtil.getString(user, "displayName", "");
var userType = propertyUtil.getString(user, "employeeType", "");
var schoolGrade = propertyUtil.getString(user, "SchoolGrade", "");
var dn = propertyUtil.getString(user, "dn", ""); // CN=Elev Globen,OU=Elever,OU=Globen,OU=Gymnasium,DC=edu,DC=ksab,DC=local
var _a = dn.split(',')
    .map(function (part) { return part.split('='); })
    .filter(function (_a) {
    var key = _a[0], value = _a[1];
    return key.trim().toLowerCase() == 'ou';
})
    .map(function (_a) {
    var key = _a[0], value = _a[1];
    return value.trim();
})
    .reverse(), schoolType = _a[0], school = _a[1], userType2 = _a[2];
var roles = [userType, userType2].filter(function (x) { return x; }); // userType="EMPLOYEE" / "STUDENT", userType2="Medarbetare" / "Elever"
school = school || "KED";
var resultUser = {
    username: username,
    mail: mail,
    displayName: displayName,
    roles: roles,
    schoolGrade: parseInt(schoolGrade),
    school: school,
    schoolType: schoolType // "Grundskolor" / "Gymnasium"
};

/**
 *
 * @param {string} variablePath
 * @param {*} valueToSet
 */
function setClientVar(variablePath, valueToSet) {
    out.println('<script>');
    out.println('(' + genVar.toString() + ')(' + JSON.stringify(variablePath) + ')');
    out.println(variablePath + '=' + JSON.stringify(valueToSet) + ';');
    out.println('</script>');
}
/**
 *
 * @param {Function} fn
 * @param {*[]} args
 */
function executeClientScript(fn, args) {
    var argsString = JSON.stringify(args);
    argsString = argsString.substr(1, argsString.length - 2);
    out.println('<script>');
    out.println("(" + fn.toString() + ")(" + (arguments.length > 1 ? argsString : "") + ")");
    out.println('</script>');
}
/** Script to be executed client-side.
 *
 * @param {string} path
 */
function genVar(path) {
    path.split('.').reduce(function (obj, key) { return obj[key] || (obj[key] = {}); }, window);
}
/**
 *
 * @param {string} src
 * @param {*} [bAsync]
 */
function includeClientScript(src, bAsync) {
    out.println("<script" + (bAsync ? " async " : "") + " src=" + JSON.stringify(src) + "></script>");
}
/**
 *
 * @param {string} href
 */
function includeCSS(href) {
    out.println("<link rel=\"stylesheet\" property=\"stylesheet\" type=\"text/css\" media=\"all\" href=" + JSON.stringify(href) + " />");
}
function configure(scriptVariables) {
    executeClientScript(function (cfg, defCfg) {
        if (typeof KED === 'undefined')
            KED = {};
        KED.cfg = cfg;
        Object.keys(defCfg).forEach(function (key) {
            if (!(key in cfg)) {
                KED.cfg[key] = defCfg[key];
            }
        });
    }, [scriptVariables, { ENVIRONMENT: 'production' }]);
}

setClientVar("KED.env.currentUser", resultUser);

var KED_TOKEN_PATH = scriptVariables.KED_TOKEN_PATH;
var KED_API_URL = "https://kedbackendtest.azurewebsites.net/api/"; // See rollup-replace-env-vars-elements.js
var EDS_API_URL = "https://api.kedschools.se/studentportal/"; // See rollup-replace-env-vars-elements.js
configure({
    KED_API_URL: KED_API_URL,
    EDS_API_URL: EDS_API_URL,
    KED_TOKEN_PATH: KED_TOKEN_PATH
});

var testVersion = request.getParameter("testVersion") ||
    request.getParameter("testversion");
var CDN_STABLE_KS = "https://vemendo.github.io/kedcomponents"; // See rollup-replace-env-vars-elements.js
var CDN_STABLE_KG = "https://vemendo.github.io/kedcomponents-public-kg"; // See rollup-replace-env-vars-elements.js
var CDN_NEXT = "https://rawgit.com/vemendo/kedcomponents-public-test/master"; // See rollup-replace-env-vars-elements.js
var CDN = testVersion ?
    CDN_NEXT :
    request.getServerName().toLowerCase().indexOf("kg") >= 0 ?
        CDN_STABLE_KG :
        CDN_STABLE_KS;

function includeOptionalCSS(_a) {
    var v1 = _a.v1, versionFolder = _a.versionFolder, version = _a.version, includeCSS = _a.includeCSS, NOCSS = _a.NOCSS;
    if (!NOCSS) {
        if (v1)
            v1.forEach(function (cssFile) { return includeCSS(cssFile); });
    }
    var cssVer = parseInt(NOCSS);
    if (isNaN(cssVer))
        cssVer = 1;
    for (var ver = cssVer + 1; ver <= version; ++ver) {
        includeCSS(versionFolder + "/v" + ver + ".css");
    }
}

var debug = request.getParameter("debug") || "";
var VendorLibs = {
    React: {
        release: 'react.production.min.js',
        debug: 'react.development.js'
    },
    ReactDom: {
        release: 'react-dom.production.min.js',
        debug: 'react-dom.development.js'
    },
    /*ReactAddonsUpdate: {
      release: 'react-addons-update.min.js'
    },
    ReactRouterDom: {
      release: 'react-router-dom.min.js'
    },
    ReactDatePicker: {
      release: 'reactdatepicker.min.js',
      css: 'css/react-datepicker.css'
    },
    Moment: {
      debug: 'moment.min.js',
      release: 'moment.min.js'
    },*/
    VendorBundle: {
        debug: 'vendors.js',
        release: 'vendors.min.js'
    }
};
function includeVendorScripts(libs) {
    var dbg = debug !== 'false' && debug !== '0' && debug !== '';
    libs.forEach(function (lib) {
        includeClientScript(CDN + "/vendor/" + (dbg ? lib.debug || lib.release : lib.release));
        if (lib.css) {
            includeCSS(CDN + "/" + lib.css);
        }
    });
}

var CSS = CDN + "/css";
var NOCSS = scriptVariables.NOCSS;
// Include CSS, HTML and the APP code:
includeOptionalCSS({
    versionFolder: CSS + "/delta-css/courseviewer",
    version: 5,
    NOCSS: NOCSS,
    includeCSS: includeCSS,
});
// Vendor scripts
includeVendorScripts([
    VendorLibs.React,
    VendorLibs.ReactDom,
    VendorLibs.VendorBundle,
    {
        release: 'kedcomponents.min.js',
        debug: 'kedcomponents.js'
    }
]);

}());
