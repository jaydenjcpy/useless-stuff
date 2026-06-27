const audioEngine = new (window.AudioContext || window.webkitAudioContext)();

const C4 = 261.63;
const D4 = 293.66;
const E4 = 329.63;
const F4 = 349.23;
const G4 = 392.00;
const A4 = 440.00;
const B4 = 493.88;
const C5 = 523.26;
const Bb4 = 466.16;

const mySong = [
    { pitch: C4, start: 0.0, length: 0.5},
    { pitch: C4, start: 0.5, length: 0.5},
    { pitch: D4, start: 1.0, length: 0.6},
    { pitch: C4, start: 1.6, length: 0.5},
    { pitch: F4, start: 2.1, length: 0.5},
    { pitch: E4, start: 2.6, length: 0.5},
    { pitch: C4, start: 3.3, length: 0.5},
    { pitch: C4, start: 3.8, length: 0.5},
    { pitch: D4, start: 4.3, length: 0.5},
    { pitch: C4, start: 4.8, length: 0.5},
    { pitch: G4, start: 5.3, length: 0.6},
    { pitch: F4, start: 5.9, length: 0.5},
    { pitch: C4, start: 6.5, length: 0.5},
    { pitch: C4, start: 7.0, length: 0.5},
    { pitch: C5, start: 7.5, length: 0.6},
    { pitch: A4, start: 8.1, length: 0.6},
    { pitch: F4, start: 8.7, length: 0.6},
    { pitch: E4, start: 9.3, length: 0.6},
    { pitch: D4, start: 9.9, length: 0.6},
    { pitch: Bb4, start: 10.5, length: 0.5},
    { pitch: Bb4, start: 11.0, length: 0.5},
    { pitch: A4, start: 11.5, length: 0.5},
    { pitch: F4, start: 12.0, length: 0.5},
    { pitch: G4, start: 12.5, length: 0.5},
    { pitch: F4, start: 13.0, length: 0.7}
];

mySong.forEach(note => {
  const beep = audioEngine.createOscillator();

  const volume = audioEngine.createGain();

  beep.frequency.value = note.pitch;
  
  beep.type = 'sawtooth'; 

  volume.gain.setValueAtTime(0.1, audioEngine.currentTime + note.start);

  volume.gain.exponentialRampToValueAtTime(0.0001, audioEngine.currentTime + note.start + note.length);

  beep.connect(volume);
  volume.connect(audioEngine.destination);

  beep.start(audioEngine.currentTime + note.start);
  beep.stop(audioEngine.currentTime + note.start + note.length);
});
