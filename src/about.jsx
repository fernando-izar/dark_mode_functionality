import React from 'react'

import classes from './about.module.css'

export const About = () => (
  <div className={classes.about}>
    <h1 className={classes.title}>Why do we exist?</h1>
    <p>
      The original idea behind a company offering a public trade of its shares
      was supposed to mean that anyone could own a piece of the companies they
      believe in, but for many people, this just isn’t the case.
    </p>
    <p>
      Since its formation in the late 18th century, the American stock market
      has consistently been the biggest driving force for prosperity in human
      history. Over time, the market’s average returns are about 10% annually —
      significantly higher than bonds and high-yield savings accounts.
    </p>
    <p>
      We believe a significant reason why many people do not invest is due to a
      lack of financial literacy, expensive financial products, and soaring
      share prices that can require people to invest $1,000 or more to purchase
      a single share of popular, high-performing stocks.
    </p>
    <p>
      Public was built to address these factors with the aim of unlocking
      greater access to the stock market for a broader audience of investors.
    </p>
  </div>
)
