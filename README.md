# OrderDesk — seed folder (Lab 02)

A small slice of the OrderDesk back office. It has **no `.git` directory** — you create the
repository yourself in step 1 of the lab.

Nothing here needs to run. It is text and source you will stage, commit, branch and merge.

```
.
├── README.md
├── notes/
│   ├── domain.md            the rules these files implement
│   └── glossary.md
├── docs/
│   └── returns-policy.md
├── src/
│   ├── cancellation.js      the cancellation source file the lab keeps returning to
│   ├── returns.js           where the refund-reason field goes in step 8
│   └── courier.js           the file you change in step 10
└── dist/
    └── bundle.js            build output — this is what .gitignore is for
```

> Two things are planted here on purpose. `src/cancellation.js` contains both a refusal
> message you will change and an unrelated typo elsewhere in the file, so that step 4's
> `git add -p` split is a real split. And `dist/` exists so `.gitignore` has something to
> actually ignore.
