export default class AudioPlayer {
	constructor(){
		// To keep a track of any event handler.
		this._events = {};
		// Think about a way to accept youtube video or straigh mp3 file.
		this._baseUrl = '';
	
		this.playing = false;
		this.duration = 0;
	
		this.audio = document.createElement('audio');
	};

	on = (e, fn) => {
		this._events[e] = fn;
		this.audio.addEventListener(e, fn, false);  
	};

	off = (e, fn) => {
		this._events[e] = null;
  		this.audio.removeEventListener(e, fn);
	};

	unbindAll = () => {
		Object.keys(this._events, (key) => {
			let fn = this._events[key];
			if (fn) {
			  this.off(key, fn);
			}
		});
	};

	preload = (streamUrl, preloadType) => {
		if (preloadType) {
			this.audio.preload = preloadType;
		}
	
		this.audio.src = streamUrl;
	};

	play = (options) => {
		options = options || {};
		let src;
		src = options.link ? options.link : undefined;
		// If no link defined just do not play
		if(src === undefined) {
			return;
		}
		// If the song is not already playing then change the src.
		if (src !== this.audio.src) {
			this.audio.src = src;
		}
		// To know which song is played
		this.playing = src;
		// And then launch the song. (Remember Promise).
		return this.audio.play();
	};

	pause = () => {
		debugger;
		this.audio.pause();
  		this.playing = false;
	};

	stop = () => {
		this.audio.pause();
		this.audio.currentTime = 0;
		this.playing = false;
	};

	next = () => {
		return true
	};

	previous = () => {
		return true
	};

	seek = (e) => {
		// If audio not ready to be play 
		if (!this.audio.readyState) {
			return false;
		}
	
		var percent = e.offsetX / e.target.offsetWidth || (e.layerX - e.target.offsetLeft) / e.target.offsetWidth;
	
		this.audio.currentTime = percent * (this.audio.duration || 0);
	};

	setVolume = (volumePercentage) => {
		if (!this.audio.readyState) {
			return;
		}

		this.audio.volume = volumePercentage;
	};
	
}