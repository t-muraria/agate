---
tags:
  - scrawls
  - uiux
---
hello. hi! hi.

I really don't like typewriter keyboards, and I really don't like computer mice.

Let's talk about Desktop Computing, and input methods.

---

Now, it is important to stress that the typewriter keyboard—here, the term is being used as "an offset-row, alphabetic keyboard, regardless of the key layout"—does have some few benefits. It contains a glut of individual keys. It's what's given us keymashing. It has every single letter in an alphabetic system.

It also really fucking sucks.

There's a lot that's been said about "ergonomics" and "ease of use" and such, but one thing I want to address first is: **This one poorly developed system should not be omnipresent in all software and hardware.** It is quite frankly ridiculous that everything is designed not just around offset-row keys that were made to avoid mechanical interlock that no longer exists, but around the concept of this as the only keyboard layout that *can* exist.

Many thoughts would here turn to ortholinear keyboards.

Let me split the definitions a bit more.

What is a keyboard used for?
- Typing text
	- Typing the typical forms a language takes
	- Typing anachronisms for friend groups
	- Typing hyperspecific phrases and emote names
- Interacting with a computer
	- Hotkeys
	- Usernames and passwords
	- Navigation
- Playing games
- Writing code

Stenography is often put forward as an input method that can replace the "Typing text" section here, but as it's hyperspecialized toward transcription, it actually falls short in a few very critical ways for our use cases. For example, I am slowly learning a variant of stenography to make translation much easier on our wrists, but our writing dances heavily around the rules of language, and also flirts deeply with code (HTML in Markdown for the use of things like Ruby text, and some specific unicode options). Such things can certainly be shorthanded as they come, but what of the rest? What of passwords, usernames? What of interactions, of emotes? There's a limit to what stenography alone can accomplish, and it feels like I'm beyond it. We're still going to move toward that over typewriting, but it's going to end up as something very different than most, which is pretty exciting and also wow this really is how everything goes isn't it.

One additional option that I'm looking at is gestured shorthand, or essentially handwriting shorthand on a trackpad. Much of the anachronistic and hotkey aspects can be offloaded to something that is more character-by-character suited than stenography is, and a trackpad will also solve one of the main other issues with HCI/UX that currently plagues a lot of things: The computer mouse is quite as bad as the typewriter keyboard is.

It's not a perfect solution, though I imagine this will help for eventually looking at how to compress input spaces even further for portable devices (Cyberdecks and pocket-sized devices only making use of typewriter layout is one reason I have always heavily disliked them. We had something interesting with the 9key shorthand on older phones, and then just didn't fucking go anywhere with it!).

---

Hey so also what the fuck is up with RMB and right-click menus? No, seriously. I don't even mean in the "everything in W11 is worse than it ever has been", why is so much depth allocated to a secondary menu that has no particular attempt to maintain any standard or coherency? And, while I'm here. Hi. WIMP. Post-WIMP. What the fuck. Oh my god. Why does everything emulate mouse buttons or keyboard buttons instead of being its own device. Losing my mind.

The thing that holds back current design the most, imho, is WIMP. We need to find a good way out of WIMP. Controller devices (joysticks, HOTAS, game controllers are the only things that can actually accomplish meaningful multiple input under current conventions, see [Key Fairy](https://store.steampowered.com/app/2878580/Key_Fairy/) and [Rusted Moss](https://store.steampowered.com/app/1772830/Rusted_Moss/) for a couple examples, but they also are restricted to being parsed *as* a mouse or keyboard for any other computer interaction) aside, a singular mouse cursor is *miserable* for the amount of potential and existing depth in an operating system. The fact that a keyboard can only even barely approximate that in some limited contexts isn't much better!

What really hooks me about steno and shorthand is that, fundamentally, they reflect the experience of *doing things* so much more than typwriter input and a computer mouse do. There's an additional layer to translate into of sequence on top of sound, of motion without gesture; ~~We shouldn't know a bird is 3223412 despair, 6233322 distortion, and 2311444 denial.~~ I shouldn't need to approach the components of a word like playing Twister with my hands, I should be able to do more than tap one at a time to form meaning. I should be able to use gestures, combinations, things that are more than the sum of their parts. It's isolated. It's isolat*ing*. Everything is locked to right-down rectangular, there exists nothing that you cannot see and there is no feedback beyond the desktop viewport. It's not how I *think*, it's not how I *am*, it's not how it *could be*. How it still can.

I very much understand why a lot of folk more into computers rely on TUI over GUI—TUI has reached much further into the idealspace of the coherent and cohesive interaction environment of the OS. Keybinds can be configured and shared. The user is always in the same environment with the same things to rely on. This is why Vim and Emacs keybinds land so well, I think.

But it isn't sustainable.

We live in a graphical time. There *are* benefits to GUI, there are reasons to use both. I don't want to give up on graphics and remain locked to textual representations all the time. Both GUI and TUI methods of using a system break down when attempting to categorize things without the use of arbitrary hierarchies, outside the rectangle—there is no way that exists to tie executables, documents, and notes together without putting them in the same folder or executing crimes with symlinks,; there is no way that exists to view files in ways that are not compartmentalized but also not fully flattened out,.; There is no way to escape WIMP while using WIMP. Thus we arrive at "I need to make an OS."

To return briefly to mice: This stance does heavily stem from experiencing wrist integrity issues, but even without those, mice have always been an odd case. The only way they seem to develop is by becoming more and more like a keyboard, by adding buttons or becoming lighter. The keyboard is the mouse and the mouse is the keyboard in an ouroboros of dead-end design potential. Where I think post-WIMP has a lead is the use of touch interaction instead, but I disagree with using smooth glass touch displays (for so many reasons...), and while I enjoy thinking about making a collaborative system, I can't even collaborate well with *myself* using current software. There are so many more dimensions that exist for interaction than our technology currently allows us to make use of. VR is constrained to one interaction point at a time for so many features, despite being some of the closest analog for hands and a head, despite being something where the offscreen still feels like it meaningfully exists in the ways that existing in 3D space does. Mice are 2D flattenings of multi-faceted and at *least* 3D gamuts.[^1] Keyboards aren't designed for anything in particular, except to be echoes of what people think they only can be, and QWERTY doesn't even allow for a single diacritic.

---

I don't have the map. I don't know if there is one, if I'm drawing it, if there's something else I'm looking for instead. But I can't just sit here and let it continue to not exist.

My first step is to figure out the keyboard input and gesture input on a trackpad. Take the edge off most of the process. Rely more on controllers and analog inputs, get our hands on alternatives and practice with them.

The future cannot be laser holographic keyboards that only accept one input at a time, and it cannot be another century of typewriting.

I refuse to ever accept that.

[^1]: There's the 3 spatial dimensions, but gestures on top of simple motion and differing numbers of interaction points do add something that I find difficult to not call additional dimensions for interaction. There's so much possibility that gets shorn away when a mouse can only move laterally.
