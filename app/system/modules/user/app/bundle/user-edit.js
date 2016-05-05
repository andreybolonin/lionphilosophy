!function(s){function e(a){if(r[a])return r[a].exports;var t=r[a]={exports:{},id:a,loaded:!1};return s[a].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}var r={};return e.m=s,e.c=r,e.p="",e(0)}({0:function(s,e,r){window.User={el:"#user-edit",data:function(){return _.extend({sections:[],form:{}},window.$data)},created:function(){var s=[];_.forIn(this.$options.components,function(e,r){var a=e.options||{};a.section&&s.push(_.extend({name:r,priority:0},a.section))}),this.$set("sections",_.sortBy(s,"priority"))},ready:function(){this.tab=UIkit.tab(this.$els.tab,{connect:this.$els.content})},methods:{save:function(){var s={user:this.user};this.$broadcast("save",s),this.$resource("api/user{/id}").save({id:this.user.id},s).then(function(s){this.user.id||window.history.replaceState({},"",this.$url.route("admin/user/edit",{id:s.data.user.id})),this.$set("user",s.data.user),this.$notify("User saved.")},function(s){this.$notify(s.data,"danger")})}},components:{settings:r(13)}},Vue.ready(window.User)},4:function(s,e){"use strict";s.exports={section:{label:"User"},props:["user","config","form"],data:function(){return{password:"",hidePassword:!0,editingPassword:!1}},ready:function(){},computed:{isNew:function(){return!this.user.login&&this.user.status}},events:{save:function(s){s.password=this.password}}}},9:function(s,e){s.exports="<div class=uk-grid data-uk-grid-margin> <div class=\"uk-width-medium-2-3 uk-width-large-3-4\"> <div class=uk-form-row> <label for=form-username class=uk-form-label>{{ 'Username' | trans }}</label> <div class=uk-form-controls> <input id=form-username class=uk-form-width-large type=text name=username v-model=user.username v-validate:pattern.literal=/^[a-zA-Z0-9._\\-]+$/ > <p class=\"uk-form-help-block uk-text-danger\" v-show=form.username.invalid>{{ 'Username cannot be blank and may only contain alphanumeric characters (A-Z, 0-9) and some special characters (\"._-\")' | trans }}</p> </div> </div> <div class=uk-form-row> <label for=form-name class=uk-form-label>{{ 'Name' | trans }}</label> <div class=uk-form-controls> <input id=form-name class=uk-form-width-large type=text name=name v-model=user.name v-validate:required> <p class=\"uk-form-help-block uk-text-danger\" v-show=form.name.invalid>{{ 'Name cannot be blank.' | trans }}</p> </div> </div> <div class=uk-form-row> <label for=form-email class=uk-form-label>{{ 'Email' | trans }}</label> <div class=uk-form-controls> <input id=form-email class=uk-form-width-large type=text name=email v-model=user.email v-validate:email v-validate:required lazy> <p class=\"uk-form-help-block uk-text-danger\" v-show=form.email.invalid>{{ 'Field must be a valid email address.' | trans }}</p> </div> </div> <div class=uk-form-row> <label for=form-password class=uk-form-label>{{ 'Password' | trans }}</label> <div class=\"uk-form-controls uk-form-controls-text\" v-show=\"user.id && !editingPassword\"> <a href=# @click.prevent=\"editingPassword = true\">{{ 'Change password' | trans }}</a> </div> <div class=uk-form-controls :class=\"{'uk-hidden' : (user.id && !editingPassword)}\"> <div class=uk-form-password> <input id=form-password class=uk-form-width-large :type=\"hidePassword ? 'password' : 'text'\" v-model=password> <a href=# class=uk-form-password-toggle @click.prevent=\"hidePassword = !hidePassword\">{{ hidePassword ? 'Show' : 'Hide' | trans }}</a> </div> </div> </div> <div class=uk-form-row> <span class=uk-form-label>{{ 'Status' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <p class=uk-form-controls-condensed v-for=\"status in config.statuses\"> <label><input type=radio v-model=user.status :value=parseInt($key) :disabled=\"config.currentUser == user.id\"> {{ status }}</label> </p> </div> </div> <div class=uk-form-row> <span class=uk-form-label>{{ 'Roles' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <p class=uk-form-controls-condensed v-for=\"role in config.roles\"> <label><input type=checkbox :value=role.id :disabled=role.disabled v-model=user.roles> {{ role.name }}</label> </p> </div> </div> <div class=uk-form-row> <span class=uk-form-label>{{ 'Last login' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <p>{{ $trans('%date%', { date: user.login ? $date(user.login) : $trans('Never') }) }}</p> </div> </div> <div class=uk-form-row> <span class=uk-form-label>{{ 'Registered since' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> {{ user.registered ? $trans('%date%', { date: $date(user.registered) }) : '' }} </div> </div> </div> <div class=\"uk-width-medium-1-3 uk-width-large-1-4\"> <div class=\"uk-panel uk-panel-box uk-text-center\" v-show=user.name> <div class=uk-panel-teaser> <img height=280 width=280 :alt=user.name v-gravatar=user.email> </div> <h3 class=\"uk-panel-tile uk-margin-bottom-remove uk-text-break\">{{ user.name }} <i :title=\"(isNew ? 'New' : config.statuses[user.status]) | trans\" :class=\"{ 'pk-icon-circle-primary': isNew, 'pk-icon-circle-success': user.access && user.status, 'pk-icon-circle-danger': !user.status }\"></i> </h3> <div> <a class=uk-text-break :href=\"'mailto:'+user.email\">{{ user.email }}</a><i class=uk-icon-check :title=\"'Verified email address' | trans\" v-show=\"config.emailVerification && user.data.verified\"></i> </div> </div> </div> </div>"},13:function(s,e,r){var a,t;a=r(4),t=r(9),s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)}});