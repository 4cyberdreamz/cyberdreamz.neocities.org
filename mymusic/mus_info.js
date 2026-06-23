//hello stranger reading my code for whatever reason. this is the first script i wrote in Years please be nice. i don't remember anything from my coding classes
let diskanim = document.getElementById("diskanim");
let active = false;

function changeInfo(x) {
	let mus = {
	songname: document.getElementById("songname"),
	duration: document.getElementById("dur"),
	notes: document.getElementById("notes"),
	cover: document.getElementById("image"),
}
//yeah we're doing this undertale style. lets go
	switch(x) {
		case 9:
		mus.songname.textContent = `new_world`;
		mus.duration.textContent = "1:53";
		mus.notes.textContent = `tbh i don't remember what i was thinking with this one. it's okay`;
		mus.cover.src = "mymusic/yay.png";
		break;
		case 8:
		mus.songname.textContent = `3d`;
		mus.duration.textContent = "0:26";
		mus.notes.textContent = `little tune for a project that i thought about for like two days and then forgot`;
		mus.cover.src = "mymusic/1.png";
		break;
		case 7:
		mus.songname.textContent = `tangled_wires`;
		mus.duration.textContent = "3:15";
		mus.notes.textContent = `finally brave enough to use fl studio. sampled my old laptop reading a disk`;
		mus.cover.src = "mymusic/yay.png";
		break;
		case 6:
		mus.songname.textContent = `digitalskies`;
		mus.duration.textContent = "0:51";
		mus.notes.textContent = `this is kind of a noisy mess... but i like it :p`;
		mus.cover.src="mymusic/1.png";
		break;
		case 5:
		mus.songname.textContent = `freezing`;
		mus.duration.textContent = "0:45";
		mus.notes.textContent = `i don't remember what "vibe" this was supposed to have originally but i now associate this song with getting lost on a very cold winter night and probably being close to freezing to death. cuz that's what i did the day after i made this.`;
		mus.cover.src="mymusic/1.png";
		break;
		case 4:
		mus.songname.textContent = `you can move around using the arrow keys`;
		mus.duration.textContent = "0:51";
		mus.notes.textContent = `i thought this sounds like something you'd hear in like. a tutorial level in a videogame. hence the name`;
		mus.cover.src="mymusic/1.png";
		break;
		case 3:
		mus.songname.textContent = `palelightfrommywindow`;
		mus.duration.textContent = "1:42";
		mus.notes.textContent =`imagine you just got home. it's still sunny outside. you didn't get enough sleep last night and now you're really tired so you decide to take a little nap. when you wake up your room is pitch dark but there's something glowing just outside your window. you're still not fully awake so you're just kinda lying there looking at it. that was me on most days during the time when i made this song (the "something" is the store across the street and various cars driving by)`;
		mus.cover.src="mymusic/pale.png";
		break;
		case 2:
		mus.songname.textContent = `gray town`;
		mus.duration.textContent = "1:28";
		mus.notes.textContent = `this is actually a remake of an even older song that was supposed to be for a game my friend and i were planning to make at the time. it didn't really go anywhere`;
		mus.cover.src="mymusic/1.png";
		break;
		case 1:
		mus.songname.textContent = `"yueyaaah babey"`;
		mus.duration.textContent = "0:51";
		mus.notes.textContent = `i thought this sounded familiar when i made this but i still don't know why. what ever`;
		mus.cover.src="mymusic/1.png";
		break;
		default:
		mus.songname.textContent = `name here`;
		mus.duration.textContent = "0:00";
		mus.notes.textContent = "notes here";
		mus.cover.src="mymusic/1.png";
		break;
	}
}

function diskSpin() {
	diskanim.src="mymusic/diskSpin.gif";
}

function diskStop() {
	diskanim.src="mymusic/diskIdle.gif";
}

function toggle() {
	active = !active;
	active === true ? diskanim.src="mymusic/diskSpin.gif" : diskanim.src="mymusic/diskIdle.gif";
}