// New Year Chaos

// It is New Year's Day and people are in line for the Wonderland rollercoaster
// ride. Each person wears a sticker indicating their initial position in the
// queue from 1 to n. Any person can bribe the person directly in front of them
// to swap positions, but they still wear their original sticker. One person can
// bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given
// queue order. Print the number of bribes, or, if anyone has bribed more than
// two people, print Too chaotic.

function minimumBribes(q) {
  let counter = 0;

  for (let [ind, pos] of q.entries()) {
    if (pos - ind >= 4) {
      counter = "Too chaotic";
      break;
    }

    for (let i = pos - 2; i < ind; i++) {
      if (q[i] > pos) counter++;
    }
  }

  console.log(counter);
}
