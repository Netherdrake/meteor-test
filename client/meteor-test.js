import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
var steem = require('steem');

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        steem.broadcast.vote("", "fnait",
            "steemfest", "steemfest-interview-series-xeroc", 10000, function(err, result) {
            console.log(err, result);
        });
    },
});
