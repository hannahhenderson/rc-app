// read/write from stdin/out
// track values... not sure how to do that. effectively, would like to store in an in-memory array
// will need to keep an eye on who plays what, and what combinations "win"

/*
[
["", "", ""],
["", "", ""],
["", "", ""],
]

[
0: [0, 1, 2],
1: [0, 1, 2],
2: [0, 1, 2],
]

that's a lot of looping, what if we add along the way... don't overcomplicate, we're doing the simple thing first

could also list out all of the possible win combinations, and check to see if any of them are met

[[0,0], [0,1], [0,2]]
[[1,0], [1,1], [1,2]]
[[2,0], [2,1], [2,2]]
[[0,0], [1,0], [2,0]]
[[0,1], [1,1], [2,1]]
[[0,2], [1,2], [2,2]]
[[0,0], [1,1], [2,2]]
[[0,2], [1,1], [2,0]]
*/
