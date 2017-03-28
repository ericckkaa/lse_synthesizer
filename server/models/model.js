var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required:true},
	email: {type:String, required: true, unique: true},
	password: {type: String, required: true}
}, {timestamps:true})

mongoose.model('User', UserSchema);

var PatchSchema = new mongoose.Schema({
    user:{type: Schema.Types.ObjectId, ref: 'User'},
    patch_name:{type: String, required:true},
    waveform:{type: String},
    hpf:{type: Number},
    lpf:{type: Number},
    attack:{type: Number},
    decay:{type: Number},
    sustain:{type: Number},
    release:{type: Number}
}, {timestamps: true});
mongoose.model('Patch', PatchSchema)
