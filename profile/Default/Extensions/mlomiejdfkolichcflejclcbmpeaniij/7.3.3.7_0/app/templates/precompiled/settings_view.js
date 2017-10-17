module.exports=function(s){var n,e="";return e+='<div id="content-settings">\n\t<div class="row collapse">\n\t\t<div class="fixed-width-left small-12 columns">\n\t\t\t<ul class="tabs vertical" id="settings-tabs" data-tabs data-match-height="true" data-auto-focus="true">\n\t\t\t\t<li class="tabs-title is-active">\n\t\t\t\t\t<a href="#settings-trackers" aria-selected="true"><span>'+(null==(n=t("settings_trackers"))?"":n)+" &amp; "+(null==(n=t("settings_blocking"))?"":n)+'</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class="tabs-title">\n\t\t\t\t\t<a href="#settings-purple-box"><span>'+(null==(n=t("settings_purple_box"))?"":n)+'</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class="tabs-title">\n\t\t\t\t\t<a href="#settings-notifications"><span>'+(null==(n=t("settings_notifications"))?"":n)+'</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class="tabs-title">\n\t\t\t\t\t<a href="#settings-support-ghostery"><span>'+(null==(n=t("settings_support_ghostery"))?"":n)+'</span></a>\n\t\t\t\t</li>\n\t\t\t\t<li class="tabs-title">\n\t\t\t\t\t<a href="#settings-account"><span>'+(null==(n=t("settings_account"))?"":n)+'</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="small-12 fixed-width-right columns">\n\t\t\t<div class="tabs-content vertical" data-tabs-content="settings-tabs">\n\t\t\t\t<!-- ............................ -->\n\t\t\t\t<!--\tTrackers & Blocking panel -->\n\t\t\t\t<!-- ............................ -->\n\t\t\t\t<div class="tabs-panel is-active" id="settings-trackers">\n\t\t\t\t\t<h3>'+(null==(n=t("settings_trackers"))?"":n)+'</h3>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-auto-update">\n\t\t\t\t\t\t\t<label id="settings-auto-update-label" for="settings-auto-update">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_auto_update"))?"":n)+'\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class="checkbox-label">\n\t\t\t\t\t\t\t\t<span id="last-updated-span">'+(null==(n=t("settings_last_update"))?"":n)+'</span>&nbsp<span id="last-updated-span-value"></span>\n\t\t\t\t\t\t\t\t<span id="update-now-span" class="blue-header">'+(null==(n=t("settings_update_now"))?"":n)+'</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-show-patterns">\n\t\t\t\t\t\t\t<label id="settings-show-patterns-label" for="settings-show-patterns"><span>'+(null==(n=t("settings_show_patterns"))?"":n)+'</span></label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_show_patterns_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h5>'+(null==(n=t("settings_highlight_trackers"))?"":n)+"</h5>\n\t\t\t\t\t<img  src='../../app/images/panel/question.svg' data-tooltip title=\""+(null==(n=t("settings_highlight_trackers_tooltip"))?"":n)+'"\n\t\t\t\t\t\t\tdata-template-classes="settings-tooltip click-to-play-img" class="question has-tip">\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t   <div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-enable-click2play">\n\t\t\t\t\t\t\t<label id="settings-enable-click2play-label" for="settings-enable-click2play">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_required_trackers"))?"":n)+'\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-replace-social">\n\t\t\t\t\t\t\t<label id="settings-replace-social-label" for="settings-replace-social">'+(null==(n=t("settings_replace_social"))?"":n)+"</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>"+(null==(n=t("settings_blocking"))?"":n)+'</h3>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-individual-trackers">\n\t\t\t\t\t\t\t<label id="settings-individual-trackers-label" for="settings-individual-trackers">\n\t\t\t\t\t\t\t\t<span>'+(null==(n=t("settings_individual_trackers"))?"":n)+'</span>\n\t\t\t\t\t\t\t</label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_individual_trackers_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-allow-trackers">\n\t\t\t\t\t\t\t<label id="settings-allow-trackers-label" for="settings-allow-trackers"><span>'+(null==(n=t("settings_allow_trackers"))?"":n)+'</span></label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_allow_trackers_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-block-trackers">\n\t\t\t\t\t\t\t<label id="settings-block-trackers-label" for="settings-block-trackers">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_block_trackers"))?"":n)+'\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- ...................... -->\n\t\t\t\t<!--\tPurple box panel  \t-->\n\t\t\t\t<!-- ...................... -->\n\t\t\t\t<div class="tabs-panel" id="settings-purple-box">\n\t\t\t\t\t<h3>'+(null==(n=t("settings_purple_box"))?"":n)+'</h3>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-show-purple-box">\n\t\t\t\t\t\t\t<label id="settings-show-purple-box-label" for="settings-show-purple-box"><span>'+(null==(n=t("settings_show_purple_box"))?"":n)+'</span></label>\n\t\t\t\t\t\t\t<img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_show_purple_box_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="alert-bubble-options dismiss-after-wrap">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t'+(null==(n=t("settings_dismiss_after"))?"":n)+'&colon;\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<select id="settings-dismiss-after">\n\t\t\t\t\t\t\t<option value="0">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_never"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="3">\n\t\t\t\t\t\t\t\t3 '+(null==(n=t("settings_seconds"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="5">\n\t\t\t\t\t\t\t\t5 '+(null==(n=t("settings_seconds"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="10">\n\t\t\t\t\t\t\t\t10 '+(null==(n=t("settings_seconds"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="15">\n\t\t\t\t\t\t\t\t15 '+(null==(n=t("settings_seconds"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="30">\n\t\t\t\t\t\t\t\t30 '+(null==(n=t("settings_seconds"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="alert-bubble-options display-in-wrap">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t'+(null==(n=t("settings_display_in"))?"":n)+'&colon;\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<select id="settings-display-in">\n\t\t\t\t\t\t\t<option value="br">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_bottom_right_corner"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="bl">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_bottom_left_corner"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="tr">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_top_right_corner"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t<option value="tl">\n\t\t\t\t\t\t\t\t'+(null==(n=t("settings_top_left_corner"))?"":n)+'\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-hide-alert-trusted">\n\t\t\t\t\t\t\t<label id="settings-hide-alert-trusted-label" for="settings-hide-alert-trusted"><span>'+(null==(n=t("settings_hide_alert_trusted"))?"":n)+'</span></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- ...................... -->\n\t\t\t\t<!--\tNotification panel  -->\n\t\t\t\t<!-- ...................... -->\n\t\t\t\t<div class="tabs-panel" id="settings-notifications">\n\t\t\t\t\t<h3>'+(null==(n=t("settings_notifications"))?"":n)+"</h3>\n\t\t\t\t\t<h5>"+(null==(n=t("settings_notify_me"))?"":n)+'</h5><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_notify_me_tooltip"))?"":n)+'">\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-announcements">\n\t\t\t\t\t\t\t<label id="settings-announcements-label" for="settings-announcements">'+(null==(n=t("settings_announcements"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-new-features">\n\t\t\t\t\t\t\t<label id="settings-new-features-label" for="settings-new-features">'+(null==(n=t("settings_new_features"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-defect-fixes">\n\t\t\t\t\t\t\t<label id="settings-defect-fixes-label" for="settings-defect-fixes">'+(null==(n=t("settings_defect_fixes"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-new-trackers">\n\t\t\t\t\t\t\t<label id="settings-new-trackers-label" for="settings-new-trackers">'+(null==(n=t("settings_new_trackers"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-show-reload-banner">\n\t\t\t\t\t\t\t<label id="settings-show-reload-banner-label" for="settings-show-reload-banner">'+(null==(n=t("settings_show_reload_banner"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-show-trackers-banner">\n\t\t\t\t\t\t\t<label id="settings-show-trackers-banner-label" for="settings-show-trackers-banner">'+(null==(n=t("settings_show_trackers_banner"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-show-count-badge">\n\t\t\t\t\t\t\t<label id="settings-show-count-badge-label" for="settings-show-count-badge">'+(null==(n=t("settings_show_tracker_count_badge"))?"":n)+'</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- ................. -->\n\t\t\t\t<!--\tSupport panel  -->\n\t\t\t\t<!-- ................. -->\n\t\t\t\t<div class="tabs-panel" id="settings-support-ghostery">\n\t\t\t\t\t<h3>'+(null==(n=t("settings_support_ghostery"))?"":n)+"</h3>\n\t\t\t\t\t<h5>"+(null==(n=t("settings_support_ghostery_by"))?"":n)+'&colon;</h5>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-share-data">\n\t\t\t\t\t\t\t<label id="settings-share-data-label" for="settings-share-data">\n\t\t\t\t\t\t\t\t<span>'+(null==(n=t("settings_share_data"))?"":n)+'</span>\n\t\t\t\t\t\t\t</label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_share_data_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-share-usage">\n\t\t\t\t\t\t\t<label id="settings-share-usage-label" for="settings-share-usage">\n\t\t\t\t\t\t\t\t<span>'+(null==(n=t("settings_share_usage"))?"":n)+'</span>\n\t\t\t\t\t\t\t</label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_share_usage_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group" id="human-web-section">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-share-human-web">\n\t\t\t\t\t\t\t<label id="settings-share-human-web-label" for="settings-share-human-web">\n\t\t\t\t\t\t\t\t<span>'+(null==(n=t("settings_share_human_web"))?"":n)+'</span>\n\t\t\t\t\t\t\t</label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_human_web_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="option-group" id="offers-section">\n\t\t\t\t\t\t<div class="suboption square-checkbox">\n\t\t\t\t\t\t\t<input type="checkbox" id="settings-allow-offers">\n\t\t\t\t\t\t\t<label id="settings-allow-offers-label" for="settings-allow-offers">\n\t\t\t\t\t\t\t\t<span>'+(null==(n=t("settings_allow_offers"))?"":n)+'</span>\n\t\t\t\t\t\t\t</label><img src=\'../../app/images/panel/question.svg\' data-tooltip data-template-classes="settings-tooltip" class="question has-tip" title="'+(null==(n=t("settings_offers_tooltip"))?"":n)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- ................. -->\n\t\t\t\t<!--\tAccount panel  -->\n\t\t\t\t<!-- ................. -->\n\t\t\t\t<div class="tabs-panel" id="settings-account">\n\t\t\t\t\t<h3>'+(null==(n=t("settings_account"))?"":n)+'</h3>\n\t\t\t\t\t<div id="settings-account-not-signed">\n\t\t\t\t\t\t<p class="blue-header signin-create">'+(null==(n=t("settings_signin_create_header"))?"":n)+"</p>\n\t\t\t\t\t\t<p>"+(null==(n=t("settings_sign_create_text"))?"":n)+'</p>\n\t\t\t\t\t\t<div class="vgap-46"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="settings-account-signed">\n\t\t\t\t\t\t<div class="vgap-22"></div>\n\t\t\t\t\t\t<h5 id="settings-account-name">'+(null==(n=t("settings_account_name"))?"":n)+':  <span></span></h5>\n\t\t\t\t\t\t<div class="vgap-4"></div>\n\t\t\t\t\t\t<h5 id="settings-account-email">'+(null==(n=t("settings_account_email"))?"":n)+': <span></span></h5>\n\t\t\t\t\t\t<div class="vgap-4"></div>\n\t\t\t\t\t\t<p class="blue-header edit-account">'+(null==(n=t("settings_edit_account"))?"":n)+'</p>\n\t\t\t\t\t\t<div class="vgap-26"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="import-export">\n\t\t\t\t\t\t<p class="blue-header export">'+(null==(n=t("settings_export_header"))?"":n)+'</p>\n\t\t\t\t\t\t<p class="regular">'+(null==(n=t("settings_export_text"))?"":n)+'</p>\n\t\t\t\t\t\t<p class="regular export-result"></p>\n\t\t\t\t\t\t<div class="vgap-20"></div>\n\t\t\t\t\t\t<p class="blue-header import">'+(null==(n=t("settings_import_header"))?"":n)+'</p>\n\t\t\t\t\t\t<p class="regular">'+(null==(n=t("settings_import_text"))?"":n)+'</p>\n\t\t\t\t\t\t<p class="regular">'+(null==(n=t("settings_import_warning"))?"":n)+'</p>\n\t\t\t\t\t\t<p class="regular import-result"></p>\n\t\t\t\t\t\t<input type="file" id="select-file" name="select-file"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n'};