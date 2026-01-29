const _midiScriptTemplate = [
  {
    name: "Crossfader",
    code: () => {
      mixer.setCrossfader(value / 0x7f);
    },
  },
  {
    name: "Ch1_Load",
    code: () => {
      if (value === 0x7f) {
        ch[0].loadVideo(mixer.getPreparedVideo());
      }
    },
  },
  {
    name: "Ch1_Play",
    code: () => {
      if (value === 0x7f) {
        ch[0].playVideo();
      }
    },
  },
  {
    name: "Ch1_Pause",
    code: () => {
      if (value === 0x7f) {
        ch[0].pauseVideo();
      }
    },
  },
  {
    name: "Ch1_Play/Pause",
    code: () => {
      if (value === 0x7f) {
        if (ch[0].isPlaying()) {
          ch[0].pauseVideo();
        } else {
          ch[0].playVideo();
        }
      }
    },
  },
  {
    name: "Ch1_Mute",
    code: () => {
      if (value === 0x7f) {
        ch[0].mute();
      }
    },
  },
  {
    name: "Ch1_Unmute",
    code: () => {
      if (value === 0x7f) {
        ch[0].unMute();
      }
    },
  },
  {
    name: "Ch1_Mute/Unmute",
    code: () => {
      if (value === 0x7f) {
        if (ch[0].isMuted()) {
          ch[0].unMute();
        } else {
          ch[0].mute();
        }
      }
    },
  },
  {
    name: "Ch1_Volume",
    code: () => {
      const val = value / 0x7f;

      ch[0].setVolume(Math.round(val * 100));
    },
  },
  {
    name: "Ch1_Speed",
    code: () => {
      // x0.25～x2.00
      const val = value / 0x7f;
      if (value < 0x40) {
        speed = 0.25 + val * 1.5;
      } else {
        speed = val * 2;
      }
      ch[0].setPlaybackRate(speed);
    },
  },
  {
    name: "Ch1_Speed_x1.00",
    code: () => {
      if (data2 === 0x7f) {
        ch[0].setPlaybackRate(1.0);
      }
    },
  },
  {
    name: "Ch1_Adjust",
    code: () => {
      if (value < 0x40) {
        ch[0].adjustTiming(+0.005 * value);
      } else {
        ch[0].adjustTiming(-0.005 * (0x80 - value));
      }
    },
  },
  {
    name: "Ch1_Adjust_ToTop",
    code: () => {
      if (data2 === 0x7f) {
        ch[0].setTime(0);
      }
    },
  },
  {
    name: "Ch1_Adjust_-1s",
    code: () => {
      if (data2 === 0x7f) {
        ch[0].adjustTiming(-1);
      }
    },
  },
  {
    name: "Ch1_Adjust_+1s",
    code: () => {
      if (data2 === 0x7f) {
        ch[0].adjustTiming(+1);
      }
    },
  },
  {
    name: "Ch1_Hotcue1",
    code: () => {
      const index = 1;

      if (value === 0x7f) {
        ch[0].hotcue(index);
      }
    },
  },
  {
    name: "Ch1_Hotcue2",
    code: () => {
      const index = 2;

      if (value === 0x7f) {
        ch[0].hotcue(index);
      }
    },
  },
  {
    name: "Ch1_Hotcue3",
    code: () => {
      const index = 3;

      if (value === 0x7f) {
        ch[0].hotcue(index);
      }
    },
  },
  {
    name: "Ch1_Hotcue4",
    code: () => {
      const index = 4;

      if (value === 0x7f) {
        ch[0].hotcue(index);
      }
    },
  },
  {
    name: "Ch1_RemoveHotcue1",
    code: () => {
      const index = 1;

      if (value === 0x7f) {
        ch[0].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch1_RemoveHotcue2",
    code: () => {
      const index = 2;

      if (value === 0x7f) {
        ch[0].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch1_RemoveHotcue3",
    code: () => {
      const index = 3;

      if (value === 0x7f) {
        ch[0].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch1_RemoveHotcue4",
    code: () => {
      const index = 4;

      if (value === 0x7f) {
        ch[0].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch1_LoopStart",
    code: () => {
      if (value === 0x7f) {
        ch[0].loopStart();
      }
    },
  },
  {
    name: "Ch1_LoopEnd",
    code: () => {
      if (value === 0x7f) {
        ch[0].loopEnd();
      }
    },
  },
  {
    name: "Ch1_LoopClear",
    code: () => {
      if (value === 0x7f) {
        ch[0].loopClear();
      }
    },
  },
  {
    name: "Ch1_filterOpacity",
    code: () => {
      ch[0].setFilters({
        opacity: value / 0x7f,
      });
    },
  },
  {
    name: "Ch2_Load",
    code: () => {
      if (value === 0x7f) {
        ch[1].loadVideo(mixer.getPreparedVideo());
      }
    },
  },
  {
    name: "Ch2_Play",
    code: () => {
      if (value === 0x7f) {
        ch[1].playVideo();
      }
    },
  },
  {
    name: "Ch2_Pause",
    code: () => {
      if (value === 0x7f) {
        ch[1].pauseVideo();
      }
    },
  },
  {
    name: "Ch2_Play/Pause",
    code: () => {
      if (value === 0x7f) {
        if (ch[1].isPlaying()) {
          ch[1].pauseVideo();
        } else {
          ch[1].playVideo();
        }
      }
    },
  },
  {
    name: "Ch2_Mute",
    code: () => {
      if (value === 0x7f) {
        ch[1].mute();
      }
    },
  },
  {
    name: "Ch2_Unmute",
    code: () => {
      if (value === 0x7f) {
        ch[1].unMute();
      }
    },
  },
  {
    name: "Ch2_Mute/Unmute",
    code: () => {
      if (value === 0x7f) {
        if (ch[1].isMuted()) {
          ch[1].unMute();
        } else {
          ch[1].mute();
        }
      }
    },
  },
  {
    name: "Ch2_Volume",
    code: () => {
      const val = value / 0x7f;

      ch[1].setVolume(Math.round(val * 100));
    },
  },
  {
    name: "Ch2_Speed",
    code: () => {
      // x0.25～x2.00
      const val = value / 0x7f;
      if (value < 0x40) {
        speed = 0.25 + val * 1.5;
      } else {
        speed = val * 2;
      }
      ch[1].setPlaybackRate(speed);
    },
  },
  {
    name: "Ch2_Speed_x1.00",
    code: () => {
      if (data2 === 0x7f) {
        ch[1].setPlaybackRate(1.0);
      }
    },
  },
  {
    name: "Ch2_Adjust",
    code: () => {
      if (value < 0x40) {
        ch[1].adjustTiming(+0.005 * value);
      } else {
        ch[1].adjustTiming(-0.005 * (0x80 - value));
      }
    },
  },
  {
    name: "Ch2_Adjust_ToTop",
    code: () => {
      if (data2 === 0x7f) {
        ch[1].setTime(0);
      }
    },
  },
  {
    name: "Ch2_Adjust_-1s",
    code: () => {
      if (data2 === 0x7f) {
        ch[1].adjustTiming(-1);
      }
    },
  },
  {
    name: "Ch2_Adjust_+1s",
    code: () => {
      if (data2 === 0x7f) {
        ch[1].adjustTiming(+1);
      }
    },
  },
  {
    name: "Ch2_Hotcue1",
    code: () => {
      const index = 1;

      if (value === 0x7f) {
        ch[1].hotcue(index);
      }
    },
  },
  {
    name: "Ch2_Hotcue2",
    code: () => {
      const index = 2;

      if (value === 0x7f) {
        ch[1].hotcue(index);
      }
    },
  },
  {
    name: "Ch2_Hotcue3",
    code: () => {
      const index = 3;

      if (value === 0x7f) {
        ch[1].hotcue(index);
      }
    },
  },
  {
    name: "Ch2_Hotcue4",
    code: () => {
      const index = 4;

      if (value === 0x7f) {
        ch[1].hotcue(index);
      }
    },
  },
  {
    name: "Ch2_RemoveHotcue1",
    code: () => {
      const index = 1;

      if (value === 0x7f) {
        ch[1].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch2_RemoveHotcue2",
    code: () => {
      const index = 2;

      if (value === 0x7f) {
        ch[1].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch2_RemoveHotcue3",
    code: () => {
      const index = 3;

      if (value === 0x7f) {
        ch[1].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch2_RemoveHotcue4",
    code: () => {
      const index = 4;

      if (value === 0x7f) {
        ch[1].removeHotcue(index);
      }
    },
  },
  {
    name: "Ch2_LoopStart",
    code: () => {
      if (value === 0x7f) {
        ch[1].loopStart();
      }
    },
  },
  {
    name: "Ch2_LoopEnd",
    code: () => {
      if (value === 0x7f) {
        ch[1].loopEnd();
      }
    },
  },
  {
    name: "Ch2_LoopClear",
    code: () => {
      if (value === 0x7f) {
        ch[1].loopClear();
      }
    },
  },
  {
    name: "Ch2_filterOpacity",
    code: () => {
      ch[1].setFilters({
        opacity: value / 0x7f,
      });
    },
  },
  {
    name: "Library_ChangeFocus",
    code: () => {
      if (value === 0x7f) {
        library.navigation.changeFocus();
      }
    },
  },
  {
    name: "Library_Move",
    code: () => {
      if (value === 0x7f) {
        library.navigation.selectPrev();
      } else {
        library.navigation.selectNext();
      }
    },
  },
];

export default _midiScriptTemplate;
