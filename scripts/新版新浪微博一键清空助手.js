/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-semi */
/* eslint-disable no-console */
// ==UserScript==
// @name         新浪微博(新版)一键清空助手
// @namespace    https://greasyfork.org/zh-CN/users/812943
// @version      0.0.1
// @description  一键批量清空微博博文、微博粉丝、微博关注列表、微博回复，同时引导用户注销微博
// @author       gafish
// @match        https://weibo.com/*
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wgARCAIAAgADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAUGBwQDAgH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjM0k6edXTGCxTFFGtzuD9ht6gXY6QAAAAAAAAAAAAAAAAAAAAAAAAAAZ9Rd3pxnK2cRAOvkAHTzDSLlgtlNWc/QAAAAAAAAAAAAAAAAAAAAAAAAAAAIqVFBp23+RhK90c+ATGs4dNmwPL1AAAAAAAAAAAAAAAAAAAAAAAACJzs1pjtiNARskAK/YBhvNsOSngC46VgmtFhAAAAAAAAAAAAAAPM9PmmUc02BoQtPNXxabVlg3tQ74AAAAZZV7bUgD7t1OG5dOK6oSwFTtgwRZK2JiHG9ftdsQAAAAAAAAAAAA/I3Ny3UGPAAAAHrt2Ga4T4AAAOaiaIMS4d5qpmDs4x2cY2qRx7Xz6BC49veOEOC16hhu4H0AAAAAAAAAAeR6UyDqh6+QAAAAANayXZCXAAAAABw5JtMQY29PMaZmcsbKBn+gVgysDZ8Y1Qs4AAAAAAAABxH1lXjFAAAAAAADc8W2EkFErJrULk/yX+Kqom/OIFhsWeDdfbGdfPcGY1LWslANok61ZRDzHMYa/fwaTm2mluAAAAAAAAPg8cj6YAAAAAAAAA+/n8AAAAADQc+shq4PnI9e+TBpLVJI8ugAM3pm98pkGv8AR9AAAAAAAADOLBlYAAAAAAAAAAAAAAAsdcupowAAAAAAAAAAAAAHL1ZmVvkAAAAdhxrtZTKJXXvQzLuv4pfvbRTue8jOY3WBiHHvUWYyv9UIsAADTcy0guYAAAAAAAAAAAAAIbH7DXAAAeh5yVsvRVbV9gAAAAAAfg+foVDPtx4jEU9AgD6+RZ7xkA3tlmkHWAAAAAAAAAABDTOZlQAAO0/NS6ZQAAAPKELAqPcWB5eoAB+AfoAeeWav4mFJWKAAEhHjapHGthPQAAAAAAAAAHzh2uY2AAemvVu+gAAhDvoVY5D18gA9LJVxtMlhutksB+gAABXsl3vGCLAAA0TO5k2IAAAAAAAAAFXyzSc2AHv4Wc033AADjxu2UgAAAHofkzD/ACbx+xMsAAAAM00vPiigAAffx+m8/vz9AAAAAAAAAFMzfU8sAF8od/L4AADG4iTjAAAeofvyPMNYscXKAAAADNNLxcjAAAO7htppwAAAAAH4H6AACMxfe8WI0C31DtNufP0AAZjUtlx48wAPv4Hp5gmozXCYAAAAPkg8im4QAAAa5RNaAAAAAAPx+gAABSbt5mEJOMANLuGHbASIAFYs4wvw22mlETPCcjulSuSN5thEzYAAAAM/6s6AAAHv46kS0kAAAAAAAAAAAEPkO7Vwyd6+QkY4bRJ4Zopbn5+gAAAAAAAArhP57X4oAAAP3QReQAAAAAAAAAAAAAhMu2zlMOWypgE7fMmG9fuJ2Y0ZWpo6wAAH5GkmqNcNMq+c85NwgAAAPaV00h7WAAAAAAAAAAAAAAACAnxjsNvVZMrT0CAAdfdDCxK6LBxxY9vEAAAACYuRQr9bPQ/P0AAAAAAAAAAAAAAAAAAEVKjPqzs4wRtkGZevEaVlMcxwOr8OZ2dBFrBIFPaHMGTTGte5QbPLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAAvEAACAgECBgICAQIHAQAAAAADBAIFAQAGEBMUIDBAERIhUBUxNBYiJCUyM5A1/9oACAEBAAEFAv8AyofcGkuzbOHz1BtRsHIaFdvQ0Lcc9AuUjajLE8fuN0EzlzuXaMtlPcOfkBxMQ/bboWlzPAAxAErr2BP204RJBnbw55lt9vGpUz0dEWOLvq7YiegFgcf7g9aofTW3dMLmWn2Vr5USrMDZD+5IOBYWNDnGs4zHPGrfmiYRIlH+6tKsTsThIuTjt+w5BP2Ni+NEJ7p0uR2jo8rbizpR5dvutK+DwTDkEnGkd6xX385xjB7lIOi7j1O/czr+asNDvnIaRuwMZ8W5CZnY8cZzjNfelFpc4mB9l9X9QLjUt9G57s5xHF6/HDTLZ2c9237HMs+HcoJQd7UnCpkrnxvC7L1LpG+NCz1CHt2F6IGmnDty8A55GRcnOB4GADYE1t4mNMKMLdqzBFjINwcX43CvVI8dtH5b3suvAThYWx3PJQ5+arxZxjOHqIBsNLFVJxqncpNYz8442y/TP8Fy8k+M/OPXtLuI9EnIk/Jt/H+1eRtUTYn0yJH47bb5q/HdQf8ANxqic2u9UpIiha3E2vPUR+lZ5bRPDqssZjLhVsdM9x3IP7VnHbcvms9RlgawrKxK8TzghywcCGELBrpIei7jxol+5LUrd7Ov5N3Q7p6GVdwxzkRYGhx3Irym+NYbqEOFzH7VfHa2f9H6bbI1A2DpHjedWHMZZeWV0zuLGmLRw+s5+fBXukSMAsTh4X4OfXcdu/P8ZwZHzV+O2IfCPpMnGuGxdI8f0MZzjPk2sxnMeGcfOLWvmkbSKRXCriiuDjeVc4F0kkZwiwYrr+jOeIQtrCTxve27LOLTjLGJY/jUvmMYwx2yXBPOMYxj0twWPOl7+3sfNp717YdKD9BtYfyx7rR4rLsnkyfxwhKeR1TpND281nUdt6jtwGv8PKazt1bUttw1LbhtFpHoaMscPj2wP6o+7uJ3nMeFdYzEltulloFMkHUIRHjxHrlD6a27ppA6vg222PK/uWznRp5/PgTRO5lKiALUYxhHzyxiWH6IRdMAKuTtx+NJ3bK+krVVv271vqXO6MczlXUOoxxCPptKibFZ1pEZ99dcmW0swJkfr27XSI9yy5Gi1lYJKPrEhAkLisylPvSbKmZBwboPW3MxzHO1RYjRq9IaQe8hIDwS5RHnO4VdCuUSaGSBMeQw4mHZKZSZ761yaTI5xIP1M5+MHJkx+yEMknVoRRX7mmRKjdvyk0QkyZ4xnKGU7tkGknguj8d4n1Sfg2w19h+pbk5Vb27aS77SxGiJlgrJe8BSALWuxdB47Nfpnu+nNyLH1Nyy+tb2BHkpQCwAPa2xBVdk82TeDP41WNZVc8e6B/DnfHP1l6m6f7Ps24LmWPduhj5L4Pj41LHzr4+NVBedXeLdf/Z4I4+Menun+07NqR/Pdbz5ll34xr/jrP44bd/+X4t0E+zveiPmuepuWPzW9m0899nj62PdjH4/Mc/0xwqhcmv8VkfqXu/bQeY76lmLn1/Ztgn1d7tyg5bvdHPxn+nGpU6tzxXbXTI+CjV6ZD1bBfpnOKZ+majnEsdtonh1ScZDn4BDmYlUjFFfw5zjGLZzrW++kT6tz1tzq/YfZtx3mg7reqw5gophn3JpmcJWVo0YeLcFl9vAIcjEr1IpretOGCQsVJJtcVzTXNXuQdX7mlAtwZ27nRat0eumPqCbM9ApHS6U2+EehjiKHiurfl+GjrelH7FojF5co5CJxSbKmZB0To/VnOI42t3kvho6n6+3b1kXYEhIc+IDTAStuxn9R65WW06+d2Xgpaf6+7ZVonoNqlUL2I2rKek7lVjzkJAUWr9cenbRlvwjHIs6moir77ABMjsqUq/cu4wvpfcJY6DeJE0JkBu/+mi2CYtH3AtDR75smimIaXhr607uUUQpQ/Q2FSu5p2tYT8EWmIahavQ1/Nv6/nHtSun86lYuS0QpCeRZUzUkKIQtYx8fpXaRZjTdS0r6ytY0zpOgEPUIRHH9Q1XKtaZ27LGmK9pfz4xnOQ1TptL7c0tWKLfrzprH0Xb6k9E24TRKJ6OpVbsdZTaxrpzY105tYUZzqNc5nUaV+Wh7eZzoe3B6FSoj0IIxf+T3/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwEAH//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQIBAT8BAB//xABCEAABAgIECwQIBQMEAwAAAAABAgMAERIgIVEEIiMwMTJAQVJhcRMzcoEQQlBikaHB0RQ0gpKxJFOiQ2NzkJPw8f/aAAgBAQAGPwL/AKqO0XbuSm8x3pbFyLI75z9xizCXfNUWuBfiEZZgHwmO87M3LEopJIIvHtlDe5CK82HFI6RRwtH60RSYcCxy9rowgasqJzNNpZQq8QG8MkhXHu9rFK0gpOkGKWDuFv3VWxYppXnHcz6KEZRlaOqa9BybjN28dIDjSqSTv9s5RlM7xZE8Fd/Sv7xRfbKDVmi1B1kXwHWjNJ9tUXEhabiILmBW/wC2fpEjYRuqT0tnWTAW2ZpUJg+26Qkh7cr7wW3U0VCp+GdOTWcU3H2lSVao6qb47zsxckRMYQo+K2JYSzPmiMi4CeE6a0tDg1VQW3EyUmwipJZyrdh+/sCZMhzjvO0NyBOMlg/moxZ2aegjv/8AERj0HOo+0BDmRWb9Gbo/20gVJiwxQwqbqOL1hHaMqC01e3aGVbFvvCohw6hxVdNupLUEpG8mKOCJpnjOiMu4pXLdX/Cvmf8AbUf4zXa+q4NPOtTZV1G4xSRYoaybqtJHduWjlUSDrN4h2wowfKrv9WKT7hPLdmUrRYpJmIbcHrgKzJbdTSSYngrgWOFVhjLtKRz3VQ60qShAdR5i41FpGsnGT1qdnudHz2qbyrdyRpMUe7a4RnGeUx883I2iCrB8iv5R2byaJqBX+mqxYiY0Go6gas6Q8/S26PUM4mN+0FvA5KVvXuEFS1FSjvOda5z/AJzvZvJncd4gtr8jeKhYWcZrR0qMvX4pqMK92Xw2YrcUEpGkmC2xNDPzVn2B7s88UeuLUnnBSqwiw+ltz1ZyV0qFXAoH6fWpLhURspceVJIi3FbGhGwNo4UgenKuJR4jKLHCvwiMjg/moxi9mjomPzB8gI/Mr+MWuhfJSRAThLdD3k/aKbSgtJ3ioHk6rv8ANRlzfKR9L/hnUdT78/lshddNg+cUl2JGqm7YGkcSgIyzqQbt8SwZn9S/tGM8QLkWZmmjV9ZN8Icb1ViY9K5azeMKiJ3mXpcb40lNRauJdmxl10ySIpKsSNVN2wzFhzrmDndjJ9Mjvg2TZOqr0UWk9VbhCGkaqBKorCGE0m12qA3H0UWk2b1bhCGW9CbNiKlmSQJkxZYynVH129HMEGpRUAQdxif4Zv4RRQkAXAVqSmWybykRICXTY/wzJyadY3n2A3yBPy2/smzlXPkPYLzlyZfH/wCbct5zQmFOuays5JCSo8hFmDqHisjHW2jznGPhPwRGM855SjWd+I+0WOu/KMTCFDqmMR9B6iUWNhfhMZVlaOZGbUvjVt34dBxG9PizUmG1L6RPCHQjkm0x3faG9dsSbSEi4DN5RhPUWRPBXf0r+8ZVsjnuzH4YmTiTMC/bVLGucVPXM5FFnEdEUsIyyrvViihIAuA2CSgCDuMFWDHslXbo7N5BSqvJzLJ97T8YkFUF8KtrKU921iiuEpBJO4QHMN/8Y+sBKAAkaANkoPpndyieu0dCvvmAl3Kt89IjtGVUk7QtY1jip61w2ymajE9d3ev7bOUOJCknSDFNuZZVo5ZjtGj1G4x2jfmLtnDI0NC3rWDTQmT8oootUdZV+YpOKSgXkx31LwiO7dPwjvaHiEUm1pWL0nOltxM0qslBbNqdKTeMwHBq6FC8QFoM0kTB2WZ3QtxWlZnVCUCajYBFHS4rWVXpvqkP5ijgqeyTxHTFJxRUbyak0KKTeIAdPbI97T8YpMqt3pOkZwkd43jJzK8GV6mMnpsr6vdl8bKxwtwckfevxOHVTBceVSVmEuNKoqEUtCxYpOcdb3TmOmYZVeaJ89llxLAqpbTrKMhCG0aqBKst5e6FOumajmecJdGqbFjlnG18SMwCN2yteP6VaX9tJVXRg40Jxj1zIMTEc4YUbpfDN4P0OZA2Rrx/SrhCvCP5rvn3pfDMCyc45RYfQjqf5zaEcKMwy3esbLPhWDVwgeH618I/5Ca4snOOUG2fpZQeGZzbrg0E2dMwXdzQ+f8A7PZXm/dmKqkcaa4d3Oj55g2z9KEnUFqumbXbjuYqcymeu5jHZnGrjZ0qNvD1TAUNBtrFv1tKTzgpWJKFhGZCG0lSjuEUdKzas5qZsAgqHdpsTmBSGTbtVs6MJSNXFV0q/h1nHb1elftGsV4f5QUOpKVDca9FlPVW4RxOHSrNnBWDZ65+mYS22JqVYIDSdOlRvOzlCxNJEiIU0dGlJvFRLrZkpJgON/qTca9F9sKuO+J4K7P3Vxbg6j4bY7lz9pjEwdw/pMWoDYvWYnhCi6bhYIotpCE3AZs4PgpxtCljdme1dGWV/iNpo6HBqqgoWJKTYRU7RrzF8UmzbvSdI2YqWoJSNJMFrBJpRvXvOZGE4SnG0oRdz2um3Y8NBvgoWJKGkGoHGlFKhvEBvCpNuX+qdkooPauXJ0fGMqrF3JGjMjCMKTb6qD9dt4XBoXHZvJlz3GrRCqbfAqJFXZKuX98/ScUEJvJiTALx+AiS1UUcCdGZCG0lSjoAgOvyU98k7f2byQpMFbE3W/mK2ReUnlOyP6htK+abDFqlN+IRknkL6HMY+EI8jOMilTvyEZOi0OQtik6tSzzOaxRQb3rMSaTjb1HSfYVLu3OJP1jKJmjjTozGI+4OijFmEK87Y70ftEd4P2iO+l0SI/MueRlGUcUvxGecosNlcBeFZVXD6sSHsWk3kV+7o+ETodoniRbs2TbITxKsEUsJV2quEWCKLaQlI3Aeyco0KXEmwx/TvA8lxlWVSvFoz8hbFjJHNVkf1D3kgfWJoZFLiVafZ+VZQrnK2MmVt9DOMnhCT4hKLEpX4VRbg6/K2Py7v7DHcr/bHdL/AGxZg7p/QY/LOeaY7mXVQjHcbT84ymEKPhEo7qn4jEmm0o8Il/1Pf//EACsQAQABAQUHBAMBAQAAAAAAAAERACExQVFhIDBAcYGRobHB0fAQUOHxkP/aAAgBAQABPyH/AJUOrcsBoduQvY631bzaZ0esYfWrhXIaJENixeGowUn+pdQVTtEv/cyOvgaq/Bt6loKx5mNRAkyLepWupFdzy/bwHVSzBmzcjDTEqPFzBf55UIglo2iY/tSCLAL6eyy2CB1rx8P4q3rPWe9TPOmNtY5w/VpQ/ByD9zN2thy7lMTM+tyskSSX8nHZ1QYbPg1EqPbR/dPny+VU6EXt51UxFRCsNi/J8e8a0AyIGP7tCICxL9PlTFl2jsRuKR9of2RIruD9RSVDgGs631b9V4o+aHAMz+zR+oLAdNq4w85OjpS+nSNiMk9Zy/QHZgtVXVOEw/1LqvTlezK+nHq0yYdP501aDl+yj5bESt9d2pdwPW332CaoWiNROAfotoWkYmHPLZN8AB9J2GUR3F9mhEkt41jbEYQVM4bhgcjGpfasibHTbMsUWj65bonGTxoWRtBYGb5a1PZbf42QgIs/NibEy5f4PHFrBLZSQQ7Gdj5rSIcLkblIIBsko7hckk3Idr0OHKpX7AjjSljZj1XbPraho1Y+N0/S2AMSXQYe2wrNukaLT34q/RHwipuWp383HeW+v9U3bMRCES+ogb2C/wBMOlLV3pk6jsNBZOQz5lEaiEiY7BC4XQ2v5+WvyPbRGsgkc+HuqVVz9EzpcwSpK72Bsz896/gLwvMyiDkvO7YnnzE4v4+NiA+B6Vp77GI9l+Htww+jlFZSkvq6b/WLz2+++sYFp8PhQoKYHD8vNQuqfZ3BFjl9dPvwvn6R0Kxw1k2Grm8B/kIn5nRejSXlTB3zdV2R+uwq5PVvWrz6I9qBZ79BqJzDtVuzXvJQpc4XYAhAy8l+w6DLmZpY+n5hOXgZ2J8h5h8cJBDsAL1kVLO4A2H54D/QHaIdFWeyhTOyX2fNT4v0vikSqq57geqq9bD80kU/kE6Er2r/ABsEYRfu/MX3idSkRhsT8uzjcwB/eDgdGXXQpRhqWwfPAk1QuTClVltXeILJZss/b8k4iCEcajJJn2nX8BmRNsd2sMAJx2GbogLcbp+AbLdoU3aDDXX34Isk0MKjE0c/Vrx4INmvCJ9thaJIQvrM/t7UTAroAbbWwNiBcC7g5W2ll2uR+gdRjXce/H3UysTvfH6HST73HHggJjPSnmlJ5abzQYE1en09dWjo0l4KbBNP6UG/cgohv9amH/N+FM8IPuUby18quU8x94q5azcd93mq/YI+eOxod3H+Lu+6l1MUWHNwqBH5VBJOtfRdXLp63cta3Bl3KK2L9blBetu7cR1sKwttnGzZw3Vj70lKsrbLuIarKGwHWoVdVYOmNEwK6AHALiJCFZozO/8AFOwLBx5Z7SUIolslRTQ4KxSEn+mvLPi58z1FxfuW20NoAtaIvGInqouKQCw4RIU4seRq/DAd2mrcWuzshdh9qNhS/TR4iWMd8fZ2/HUhq1cspaF2mThxQDAL6BTJCceTuAGgW5yaKWbc974eQvqD+RtXmtLgM2j2OFLX8bjQ5CKcFqZr5o7ALFj5VG3mTnm6tHoh3o+jSVLcpuGWqL+sxoFEUMeFJ1gErlV+sX12WmNgYtErFo9rltx84RjyFSfUA/ipGfmtiJyXLDT2bZ9HerqBvIELsVM8zcyLt7hf59eFzZYfprtF3G8+zvt4AHe+XSmbp40NwoZdiVGEWNYPxvIpsPUrTcJg3TrHC/UFa+2zdbrrVcRE7V2wbDNwKlpHtobklkuX0g7NzD7NDNpu8jYuov8ANwt4lJQyDnwjsPu1smSJOoXe+2r+y6q7x67lsS2pV+NKMrGSkRS272e27Vh9bNwE1oIRwhZMCPls8iAbZU8H6XtuADqFQpkr1am2+pW+nuwBZzzX/NxkcR5Tbwsv9Anvs2Gsts4n+pnbgohm7dc4flTkJA1bffdnaOLyLDcToXk5rPThVnUrA1LT02Tf0+Zb6TtuKXmdFnpG3GWsUxnH5Y1Kz6MOt27OJAoud723NkcdDm47cMz5ZLzrTYbMmmmPilJEIJjtWAg27CihWyMNy444MSrk7GcXLlumagJVwp07cemfXcTyTrWRw6zk3XNc9/XZC4jMsf527LYsbtDrr9L4igbdvHF5ZzGrD2O3PBkbs7iGDx+r9w9N0BUbjw8hTJIYlSIt8bBayiKsIm6TbvFAjk0WQaGHuV6PT00jeXOrxZVIdMDwW0wfeIxaCHl0KN2Fqb4dprruAWwoLvNz2OefEoFFpynLlSDmSMNg02i3HJqx+HDZIoEouohaLLnk5G553g8mvF2Yj/Bfml1tjAbFxjagbAI+2Kv4OUg2P5UnMYZsY3AKwUjspbgtfhxs+YNZHhzKXyGGAzHZiIVyDk4VDynldLlCJJaO+Snl8KpvOz3Kk5po9We5sqQAvowd4D6268e5SMHDllS2JMB48dq4zyeg2VDAuZVDTmXxzXa6P021AqgF64VOwUvJB0KnBbOPW+Knzr13Na2Ym3Qlyh2dM6t5EfokSgJ8K/kxp5erHVluPEOqvD9Pqozb7Zfh7Af0MKv8fqupWUtTeJILFCw5tTqL2Fz5ogCAEAF36RBIbRqSBfEWqTTg/wCgvOGi1R9TGoNXIH3aM3TIQfqZ1nP9jGpBJwKPJUlDGF5DfkhU3AVEx79c1cPP98+KYFR9Ju/Xys6/Q31bC2BC80bzL8q8L57xV/ro9FXqdTeh5qv9NXiYouPrhWGDn8yrl/RaHjlY+qaxgs3fF1DwvIP+Tz//2gAMAwEAAgADAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAMFCAAAAAAAAAAAAAAAAAAAAAAAAAAAKDCAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAACAAAAAAAAAAAAAAAAAAAAAAAABCCAEDADAAAAAAAAAAAAAABFMIACAAAAKAAJAEAEKAAAAAAAAAAAAGAAAAABAAAAMDCALAIALAAAAAAAAAAAIAAAAAAFAAAAAANAFAEAAAAAAAAAAABKAAAAAAAEAAEIICAIACACAAAAAAAAAAGAAAAAAAAEAAAAABAMGAAIMAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAABMMMIEDAAAAEAAAAAAAAAAAAAAKAAAGMAAAAAABPECAEABAAAAAAAAAAAFIABMAAADBAAAPIAECAAEAAAAAAAAAAAOAAKAABGIAEILIAAAIAAAEAAAAAAAAAACAFIAACAAAEDAAAAAEAAAAIAAAAAAAAAIAEAAACAABLEAAAAAFAAAEAAAAAAGAAAIAAAAADAAAIAAAAABAAAAAAAAAAAMAAABCAIAAEKCCFIAAAABAAAGIAAAAAAAAAAAFCACCAAAAAAAAAKAAACIAAAAAAAAAAAAABBAMIDAAAAACAAAAEIAAAAAAAAAAAAAAAALAAEIEMIAAAACCAAAAAAAAAAAAAAAAAAAAACCCACDDMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQMBAT8QAB//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/EAAf/8QAKxABAAADBgYCAwEBAQAAAAAAAQARITFBUWFxgSAwkaGx8EDBENHhUPGQ/9oACAEBAAE/EP8Ayonq2oCVZkXrdrGKaQIwkq3Y++a8w56XuTG7JPuA94UF8xl0mT6keixAZ98UaKATQkx/2WZQdRj0DbjnQ37CKbiNgMhmrXUTSN5wjILVkg/64cChySnWabcn+CkUliZNI/gwQV/OzSP7toH+rIvKAgwRjxAwGJhDWcdp8vcnePbdrqu0beofVJcdyYe4JuzUwlH02nAlyXj/ALP/AGKhsie84SD6jQDyGsbbhGcKDR4Zip26rEwLnrSOs9p3hcntP9qzbgB735xIydQp1LdGubElOwEUWiNjwSVkrEHYF2NkBpVcB/27lYQJbgtLrxpSP2mHAbxuTgTcWDuyTo1x/wBKsy8mKLVbhexcMyA3B7ow3UHSmltKJEzgD1kepH/YzGVUzJmfFNObsU7i7WkSbCgsfsbZ3nBYuTHP2FuY/wCBRwsABirZGYth3Jd8eijiH3HnWvkjCTRx2y5ez+yL1OALlTJcEMJvL8Udid8NuCqlIAjiJG1sG43da5xvMwGAarJ4ZC3KBrLMWmNmHAhH9tNmWz50dQnCDXLSM04Doh7DWMJUA0DQ2ON59VQaE51yr0YcrQIWAzapA78TtNcDAfdpdGED1hxzVz4eG3Dlwm9MWZkyu4N1niQTfYaj8ydiH0B1K7ZGcJQOhotDW3F5OdFoBMeseD6gZbWcnWUKGKtEuSG/4ZAFN0olGYJVK0M1s8PafU3hePtY3llAtWV43nBroW5LRqT3cFTu9BU6Sb/K1r4NOiRmyIQPC2T1tFDLmf8AOcl9pcuTlYBBgjbGZqBpvloyY1ESBwFE4JOtMVhG4bl8DtZUANZjhwWTkCyVIGQrs/Pe8NMKblIkpWwBJz+Q17SPHedmsTjykIzXm+50P1zcoFhiy57N8THTRsomeJc8FK2cSxG6miOD9w7Ps4H7LRV7/G2PxQD+5XxsyA+pkvvw5+W71XnW380CxcVj1uh7brQQyR0fzT9DCs2enccH/bkXgPqSk5fFu+urcF6+0iYm+lAGN13wP+TcH59taFWJY/qwUl1jpOE7D5jvZC707R6+fIx5zQ6JKMuAS1IHvGJhAPNVQ0VyixegCaZOVvBOXlkSzqEdZ8EgmOIa27N+fa0X04Pc8H4jtnOHC9f60hxV3+sqvb8j4H/B8SPYpjM3eUo2SIHpkhT9eh2FNVi/LIpvXkOrUP5FFzdpEmqm5c4I0TH8pIQNKY767cHjoRMeZ/nzfsUhkOA/Icy2wE+su3w9RbQrgvVoEPvXi/pq9+vgqlKaEViJzZoovXhCyOk5tV/KvSWAGkmJu87QA1nXCyttv4kJmpJWKxwLWLHs3iS1c1q8CW0TkqqkX7Z3M50/F/mGSr1ccirFnh8RWqzWa1+El9VgAJqxX4rsJGK7Apj8/ZTsDk6jgk4XAQYI0Y+if9HaLOgwaYKHFmg4nqk4scrAGgPhyQtHK5inV0/wPDnz7A+fbuG8WLlWzc3f4P8AbMmfOamFx2AzWhG1rMbhkFDmBWW+PoR7anBjAfoCWHePNg90+I9BxxH8Xm8kj9Y9pFwg9oywh6yTsS7QdPABbJJPXl/xqsO/znbGiyejq5T+3FCKbmBMUo0lZA6Tj2LgudsZEoB6By/+kMJkrvHqIYB5N4LVhlQJoZk8pz5AOWDA7oRnMw+b4rVHgT6CLVulovI+y5g6vyJuUb2aNytbqZRZwmDTBQ586xIakAiYI0YWPx0vlftmZRcq0KDFWDM4qP4FBNGHNJwsrXWcaEYGYKzYzy+XbcjAm95poOOfUchRuAtj0OBQ8HWJcpQAsAKHwLYviV340oLHxtB83ziX8y/QVnY3YcjR8QefbK5UuEjfZoeBaOXyOou+Q1NCezjtzpbhvS4P5bFJfAAFzu3/AAbYsYt4KzxQARfUKBxrw368j+ZNCeG0uigA9iriYN58f9Fva9PJxeVhQkuD+WxYmz+IouLteRlMkPVY0ok+0knrGTdy6DX2hIPtDI90ZDYL1Hhtgpx49hSH0lo3MV/AC+xzLHM5E1WR9VRaOOUFvVYASZ8WatbAAnOOmHRNOW1nCF0doIyAiyguKcGS7G3j3bWPhaL6wZoEaQqd7nGITgfVXgvqmEtysSaBgCZWl3RpZQNcwzJn4nFlSLbLORmucACe+FMw5P242UbKfxWJt1kcRqk7IvDjeq9Msd7COkgU4FgGHInoGeAl44NGJgJbsmma7pHmKMBLkyP+DE2GW3IuwfyHRR2+L6PDhXd8YUq5R4awCU3NteLrk4egZr+4qLScBcFwFDkAqBawsIqaCG0JbWzKssrGkTnL8DLNj9I8hRfNrDM+LKnevLhdF2pNI/fbj67R0wDpVyBVivEozUsnhCIDX0tHCCKEaC2UdXqwmvO1y9Jefkxk2dBzXj/vVMjw8M+9bgU+Dj+g1OQglxmCJMVTJnfBnFQqAtlnCVNKt7HtQTffLu0/UT4OQ/VGh4T52/H/ANL7mJ6fpXCDs8YIMQ4ZQETkoQoBCMgGe/5ktVwDrHR5a2eJxEbcJ78i1O/QXk25u8TJ8ckJl2HdRw3hLqc4xQBbQRHd40nAnqEIpAjID7/OUVbfsO6fLrNheqOxexlye7tUjsSUxXmsXz5En07M+hZa8FayXiHQbpIPSSwAkxNuIFaOANHJKOs4cYqgKLR5MsYpK/oZ2EXHL0BZLDdv5SpXUAATVbiOlaOtzFV0kXcieXJYb+1tyH4/UKsE0yKOF334OgaqaS41mkwRZgYNjSF3/sHXMzKPHMlPoM2JrcRScs7HR/6X8vc/iC64D1Ux5GP4WT9BatxHW3C7XS4yPjpbVYCkkit8MW7HW5zODSLwOI4iUco3NELwcrxvOPoUBolTxjHtKgCkuoax62nOsery0hTc5LrKUaLGfI7Iz47N+T3DSLLuAHYcuuWzojEvfc1s42YO8ygrvfp8mvqvfbNY9boTW20EcH83aU8NpG/+oZl5glHX40icoADFWLzUyJgbcy1y5ORh0SPYXWtbPlafHAD3LmkSn6Ako4EsrUdksTJowpmSG428mmd3xGQxBI9A2m5Q2ZVA2d7mzeTFkupV+bixwuX1+bnHYGj/AELo3AXdUjuXy4c1oih1ttMo0PsE3UbycufHVknAD1Y9QC6ibsSziWjjhupdzLLktsWoH1jGf7Q0Mexdj8/UZoLFWrMgO8WBZixmbhxO71G6cukZ2pGolR2lGtPnzK6x1wid5pnHhtyBDBRQ9cvaPYflOZh7iJTmHQIzyWJcidhkcqp1KhrDfyKYpGB1EdduMin+FkBoV7Bqo5w3W7mfc3BlPkM+mtzHoMcj+MN6/wDUePr71R3jn6IzDB5ReZk1kNdkG7DGNMTc513yMmKPVgAFwXf4sdYcICdnY6JGtGgS0NSZLP42zqhYi1Ggw9nCNR/AyiwmCGkCn+T/ANJgKPKcZu7D3hdiHfTgBDfn2qWgV0CHMnwdZSLsMezhkQ1vyhiNC0D/AD9ENB0Zd0ZFOHRC94Z9sLR8I7Fyi9RhmYe940j36eke7/Udxd+CPVo5yjptn2E9of36XSQd49h5arwioP8AyQk7I/6OEkj/AMnv/9k=
// @license      MIT
// @require      https://greasyfork.org/scripts/415581-jquery%E5%BA%93/code/jquery%E5%BA%93.js?version=866373
// @require      https://greasyfork.org/scripts/26454-jquery-cookie/code/jQuery%20Cookie.js?version=169689
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  const jq = window.jQuery

  const HELPER_NAME = '微博一键清空助手'
  const TOKEN = jq.cookie('XSRF-TOKEN')
  const WB_CONFIG = window.$CONFIG
  const UID = WB_CONFIG.uid
  const USER = WB_CONFIG.user

  const showNewWeoboTip = () => {
    if (!jq('#plc_frame .WB_frame')[0]) {
      return setTimeout(showNewWeoboTip, 1000)
    }

    const tip = jq('<div />')

    tip
      .css({
        position: 'fixed',
        top: 70,
        left: 10,
        width: 200,
        height: 30,
        color: '#f00',
        background: '#fff',
        border: '1px solid #f00',
        lineHeight: '30px',
        textAlign: 'center',
        cursor: 'pointer',
      })
      .text('当前是旧版，是否切换到新版？')
      .click(() => {
        const newWeiboEntry = jq('a[action-type="changeversion"]')

        newWeiboEntry[0].click()
      })

    jq('#plc_frame').append(tip)
  }

  if (!USER) {
    return showNewWeoboTip()
  }

  const STATUSES_COUNT = USER.statuses_count
  const FRIENDS_COUNT = USER.friends_count
  const FOLLOWERS_COUNT = USER.followers_count
  const URL_PREFIX = 'https://weibo.com/u'
  const c_app = jq('#app')
  const c_menu = jq('<div />')
  const c_notice = jq('<div />')
  const c_btn = jq('<div />')

  if (!UID) return

  // 当前删除页码
  let deletePage
  // 已删除数
  let deletedCount
  // 停止清空
  let stop
  // 折叠菜单
  let fold

  const utils = {
    // 获取随机字符串
    getRandomString: (stringLength = 10) => {
      var myStrings = [
        'hello',
        'world',
        'going',
        'home',
        'with',
        'and',
        'eating',
        'food',
        'drink',
        'cola',
        'orange',
        'melon',
        'dragon',
        'chicken',
        'walking',
        'road',
        'city',
      ]

      var result = ''

      for (var i = 0; i < stringLength; i++) {
        var index = Math.floor(Math.random() * 100) % myStrings.length

        result += myStrings[index] + ' '
      }

      return result
    },

    // alert fail
    alertFail: (jqXHR, textStatus, errorThrown) => {
      var error = '状态码:' + jqXHR.status + ',异常:' + errorThrown
      alert('读取数据失败,请稍后重试\n' + error)
    },

    // 检查是否在当前页
    checkURL: (url, title) => {
      const isCurrent = window.location.href.indexOf(url) !== -1

      if (!isCurrent) {
        const r = confirm('当前操作需要前往 ' + title + ' 页面，是否跳转？')

        if (r === true) {
          window.location.href = url
        }
      }

      return isCurrent
    },

    // 输出提示信息
    showNotice: html => {
      c_notice.show().html(`
        <div style="padding: 5px;">
          ${html}
        </div>
      `)
    },

    // 显示删除进度
    showDeleteNotice: (count, no) => {
      if (count === null) {
        utils.showNotice(`
          <div>
            <div>正在删除第 ${deletePage} 页，第 ${no} 条</div>
          </div>
        `)
      } else {
        // 剩余数
        const remain = count - deletedCount

        utils.showNotice(`
          <div>
            <div>总共 ${count} 条</div>
            <div style="border-bottom 1px solid #000;">剩余 ${remain} 条</div>
            <div>正在删除第 ${deletePage} 页，第 ${no} 条</div>
          </div>
        `)
      }
    },

    // log
    log: (...args) => {
      console.log(`${HELPER_NAME}:`, ...args)
    },

    // 串行Promise
    serialPromise: (promises, callback) => {
      let i = 0

      const next = () => {
        if (i < promises.length) {
          promises[i++]().then(next)
        } else {
          callback()
        }
      }

      next()
    },

    // 发布测试微博
    publishTestStatus: max => {
      const r = confirm('这是测试功能，是否继续？')

      if (!r) return

      let i = 1

      const fn = () => {
        utils.log('发布第', i, '条微博')

        publishWeibo(() => {
          if (i >= max) {
            const r = confirm('测试数据发布完成，是否刷新页面')

            if (r) location.reload()

            return
          }

          setTimeout(fn, i % 6 === 0 ? 20000 : 8000)

          i++
        })
      }

      fn()
    },
  }

  utils.log('微博 token = ', TOKEN)
  utils.log('window.$CONFIG =', WB_CONFIG)
  utils.log('uid = ' + UID)

  // 重置
  const reset = () => {
    deletePage = 0
    deletedCount = 0
    stop = false
    fold = false
  }

  // 结束
  const end = () => {
    utils.log('删除完成')
    utils.showNotice('删除完成')
    c_btn.hide()

    setTimeout(() => {
      const r = confirm('已清空，是否刷新页面？')

      if (r === true) {
        location.reload()
      }
    }, 100)
  }

  // 发布微博
  const publishWeibo = cb => {
    const data = {
      content: utils.getRandomString(Math.floor(Math.random() * 20 + 5)),
      pic_id: '',
      visible: 0,
      share_id: '',
      media: JSON.stringify({}),
      vote: JSON.stringify({}),
    }

    jq.ajax({
      type: 'POST',
      url: '/ajax/statuses/update',
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      headers: {
        'x-xsrf-token': TOKEN,
      },
      dataType: 'json',
      data: data,
    })
      .done(function (res) {
        utils.log('发布微博', res)

        cb && cb()
      })
      .fail(utils.alertFail)
  }

  /** ===== 清空微博 ===== */

  // 清空微博
  const cleanWeibo = () => {
    if (!utils.checkURL(URL_PREFIX + '/' + UID, '我的主页')) return

    const r = confirm('想清楚了吗？这是要清空所有微博哦，确定吗？')

    if (r === true) {
      reset()

      c_btn.show()
      utils.showNotice('马上开始删除微博')

      getWeiboList()
    }
  }

  // 获取微博列表
  const getWeiboList = () => {
    if (stop) return

    jq.ajax({
      url: '/ajax/statuses/mymblog?uid=' + UID + '&page=1&feature=0',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (res) {
        utils.log('获取微博分页', res)
        if (res && res.data && res.data.list) {
          if (res.data.list.length === 0) {
            return end()
          }

          deletePage++

          utils.log('第 ', deletePage, ' 页')

          // 循环promise
          const promisesTask = res.data.list.map((item, index) => {
            return () =>
              new Promise(resolve => {
                setTimeout(() => {
                  const id = item.id
                  const no = index + 1

                  if (stop) return

                  utils.log('待删除微博', no, id)
                  utils.showDeleteNotice(STATUSES_COUNT, no)
                  deleteWeibo(id).done(resolve)
                }, Math.random() * 500 + 500)
              })
          })

          utils.serialPromise(promisesTask, () => {
            setTimeout(() => {
              getWeiboList()
            }, 1000)
          })
        }
      })
      .fail(utils.alertFail)
  }

  // 删除微博
  const deleteWeibo = id => {
    const postData = { id: id }

    return jq
      .ajax({
        url: '/ajax/statuses/destroy',
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        dataType: 'json',
        headers: {
          'x-xsrf-token': TOKEN,
        },
        data: JSON.stringify(postData),
      })
      .done(function (res) {
        deletedCount++
        utils.log('已删除微博', id, res)
      })
      .fail(utils.alertFail)
  }

  /** ===== 清空关注列表 ===== */

  // 清空关注列表
  const cleanFollow = () => {
    if (!utils.checkURL(URL_PREFIX + '/page/follow/' + UID, '我的关注')) return

    const r = confirm('想清楚了吗？这是要清空所有关注的人哦，确定吗？')

    if (r === true) {
      reset()

      c_btn.show()
      utils.showNotice('马上开始删除关注用户')

      getFollowList()
    }
  }

  // 获取微博关注列表
  const getFollowList = () => {
    if (stop) return

    jq.ajax({
      url: '/ajax/friendships/friends?uid=' + UID + '&page=1',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (res) {
        utils.log('获取微博关注分页', res)
        if (res && res.users) {
          if (res.users.length === 0) {
            return end()
          }

          deletePage++

          utils.log('第 ', deletePage, ' 页')

          // 循环promise
          const promisesTask = res.users.map((item, index) => {
            return () =>
              new Promise(resolve => {
                setTimeout(() => {
                  const id = item.id
                  const no = index + 1

                  if (stop) return

                  utils.log('待删除关注用户', no, id)
                  utils.showDeleteNotice(FRIENDS_COUNT, no)
                  deleteFollow(id).done(resolve)
                }, Math.random() * 500 + 500)
              })
          })

          utils.serialPromise(promisesTask, () => {
            setTimeout(() => {
              getFollowList()
            }, 1000)
          })
        }
      })
      .fail(utils.alertFail)
  }

  // 取消关注
  const deleteFollow = id => {
    const postData = { uid: id }

    return jq
      .ajax({
        // 注：微博接口单词拼写错误，应该是 destroy
        url: '/ajax/friendships/destory',
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        dataType: 'json',
        headers: {
          'x-xsrf-token': TOKEN,
        },
        data: JSON.stringify(postData),
      })
      .done(function (res) {
        deletedCount++
        utils.log('已取消关注', id, res)
      })
      .fail(utils.alertFail)
  }

  /** ===== 清空粉丝列表 ===== */

  // 清空粉丝列表
  const cleanFans = () => {
    const url = URL_PREFIX + '/page/follow/' + UID + '?relate=fans'

    if (!utils.checkURL(url, '我的粉丝')) return

    const r = confirm('想清楚了吗？这是要清空所有关注的人哦，确定吗？')

    if (r === true) {
      reset()

      c_btn.show()
      utils.showNotice('马上开始移除粉丝')

      getFansList()
    }
  }

  // 获取微博粉丝列表
  const getFansList = () => {
    if (stop) return

    jq.ajax({
      url: '/ajax/friendships/friends?uid=' + UID + '&relate=fans&page=1',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (res) {
        utils.log('获取微博粉丝分页', res)
        if (res && res.users) {
          if (res.users.length === 0) {
            return end()
          }

          deletePage++

          utils.log('第 ', deletePage, ' 页')

          // 循环promise
          const promisesTask = res.users.map((item, index) => {
            return () =>
              new Promise(resolve => {
                setTimeout(() => {
                  const id = item.id
                  const no = index + 1

                  if (stop) return

                  utils.log('待删除粉丝', no, id)
                  utils.showDeleteNotice(FOLLOWERS_COUNT, no)
                  deleteFans(id).done(resolve)
                }, Math.random() * 500 + 500)
              })
          })

          utils.serialPromise(promisesTask, () => {
            setTimeout(() => {
              getFansList()
            }, 1000)
          })
        }
      })
      .fail(utils.alertFail)
  }

  // 移除粉丝
  const deleteFans = id => {
    const postData = { uid: id }

    return jq
      .ajax({
        url: '/ajax/profile/destroyFollowers',
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        dataType: 'json',
        headers: {
          'x-xsrf-token': TOKEN,
        },
        data: JSON.stringify(postData),
      })
      .done(function (res) {
        deletedCount++
        utils.log('已删除粉丝', id, res)
      })
      .fail(utils.alertFail)
  }

  /** ===== 清空赞列表 ===== */

  // 清空赞列表
  const cleanLike = () => {
    const url = URL_PREFIX + '/page/like/' + UID

    if (!utils.checkURL(url, '我的赞')) return

    const r = confirm('想清楚了吗？这是要清空所有的赞哦，确定吗？')

    if (r === true) {
      reset()

      c_btn.show()
      utils.showNotice('马上开始移除赞')

      getLikeList()
    }
  }

  // 获取微博赞列表
  const getLikeList = () => {
    if (stop) return

    // 微博好像有bug，第1页的赞被删除后，后面的列表就无法显示，所以暂时不删除第1页数据
    if (deletePage === 0) {
      deletePage = 1
    }

    jq.ajax({
      url: '/ajax/statuses/likelist?uid=' + UID + '&relate=fans&page=2',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (res) {
        utils.log('获取微博赞分页', res)
        if (res && res.data && res.data.list) {
          if (res.data.list.length === 0) {
            return end()
          }

          deletePage++

          utils.log('第 ', deletePage, ' 页')

          // 循环promise
          const promisesTask = res.data.list.map((item, index) => {
            return () =>
              new Promise(resolve => {
                setTimeout(() => {
                  const id = item.id
                  const no = index + 1

                  if (stop) return

                  utils.log('待删除赞', no, id)
                  utils.showDeleteNotice(null, no)
                  deleteLike(id).done(resolve)
                }, Math.random() * 500 + 500)
              })
          })

          utils.serialPromise(promisesTask, () => {
            setTimeout(() => {
              getLikeList()
            }, 1000)
          })
        }
      })
      .fail(utils.alertFail)
  }

  // 移除赞
  const deleteLike = id => {
    const postData = { id: String(id) }

    return jq
      .ajax({
        url: '/ajax/statuses/cancelLike',
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        dataType: 'json',
        headers: {
          'x-xsrf-token': TOKEN,
        },
        data: JSON.stringify(postData),
      })
      .done(function (res) {
        deletedCount++
        utils.log('已删除赞', id, res)
      })
      .fail(utils.alertFail)
  }

  /** ===== 清空收藏列表 ===== */

  // 清空收藏列表
  const cleanFav = () => {
    const url = URL_PREFIX + '/page/fav/' + UID

    if (!utils.checkURL(url, '我的收藏')) return

    const r = confirm('想清楚了吗？这是要清空所有的 收藏 哦，确定吗？')

    if (r === true) {
      reset()

      c_btn.show()
      utils.showNotice('马上开始移除收藏')

      getFavList()
    }
  }

  // 获取微博收藏列表
  const getFavList = () => {
    if (stop) return

    jq.ajax({
      url: '/ajax/favorites/all_fav?uid=' + UID + '&page=1',
      type: 'GET',
      dataType: 'json',
    })
      .done(function (res) {
        utils.log('获取微博收藏分页', res)
        if (res && res.data) {
          if (res.data.length === 0) {
            return end()
          }

          deletePage++

          utils.log('第 ', deletePage, ' 页')

          // 循环promise
          const promisesTask = res.data.map((item, index) => {
            return () =>
              new Promise(resolve => {
                setTimeout(() => {
                  const id = item.id
                  const no = index + 1

                  if (stop) return

                  utils.log('待删除收藏', no, id)
                  utils.showDeleteNotice(null, no)
                  deleteFav(id).done(resolve)
                }, Math.random() * 500 + 500)
              })
          })

          utils.serialPromise(promisesTask, () => {
            setTimeout(() => {
              getFavList()
            }, 1000)
          })
        }
      })
      .fail(utils.alertFail)
  }

  // 移除收藏
  const deleteFav = id => {
    const postData = { id: String(id) }

    return jq
      .ajax({
        url: '/ajax/statuses/destoryFavorites',
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        dataType: 'json',
        headers: {
          'x-xsrf-token': TOKEN,
        },
        data: JSON.stringify(postData),
      })
      .done(function (res) {
        deletedCount++
        utils.log('已删除收藏', id, res)
      })
      .fail(utils.alertFail)
  }

  /** ===== 初始化 ===== */

  // 初始化菜单
  const initMenu = () => {
    // 菜单列表
    const menuList = [
      {
        text: '清空微博',
        onClick: cleanWeibo,
      },
      {
        text: '清空关注',
        onClick: cleanFollow,
      },
      {
        text: '清空粉丝',
        onClick: cleanFans,
      },
      {
        text: '清空收藏',
        onClick: cleanFav,
      },
      {
        text: '清空赞',
        onClick: cleanLike,
      },
      // {
      //   text: '随机发布一条微博',
      //   onClick: () => {
      //     publishWeibo(() => {
      //       const r = confirm('发布成功，是否刷新页面')

      //       if (r) location.reload()
      //     })
      //   },
      // },
    ]
    // 生成菜单
    c_menu.css({
      position: 'fixed',
      top: 80,
      left: 10,
    })

    const hideBtn = jq('<div>')

    hideBtn
      .css({
        width: 40,
        height: 20,
        background: '#fff',
        border: '1px solid #f00',
        cursor: 'pointer',
        lineHeight: '20px',
        textAlign: 'center',
        fontSize: 12,
      })
      .text('收起')
      .click(() => {
        fold = !fold

        if (fold) {
          hideBtn.text('展开')
          container.hide()
        } else {
          hideBtn.text('收起')
          container.show()
        }
      })

    const container = jq('<div>')

    container.css({
      width: 140,
      border: '3px solid #f00',
      background: '#fff',
      zIndex: 9999,
      fontSize: 14,
      textAlign: 'center',
    })

    menuList.forEach((item, index) => {
      const div = jq(`<div>${item.text}</div>`)

      div.css({
        cursor: 'pointer',
        padding: '5px 10px',
        borderTop: index === 0 ? '' : '1px solid #f00',
      })

      div.click(() => {
        if (item.onClick) item.onClick()
      })

      container.append(div)
    })

    c_menu.append(hideBtn)
    c_menu.append(container)
    c_app.append(c_menu)
  }

  // 初始化按钮
  const initBtn = () => {
    // 生成按钮
    c_btn.css({
      display: 'none',
      position: 'fixed',
      top: 70,
      right: 10,
      width: 140,
      height: 25,
      border: '1px solid #0f0',
      background: '#fff',
      zIndex: 9999,
      fontSize: 14,
      textAlign: 'center',
      cursor: 'pointer',
    })

    c_btn.text('停止').click(() => {
      stop = true
      c_btn.hide()
      c_notice.hide()
      utils.log('已停止操作')
    })

    c_app.append(c_btn)
  }

  // 初始化提示框
  const initNotice = () => {
    // 生成提示框
    c_notice.css({
      display: 'none',
      position: 'fixed',
      top: 100,
      right: 10,
      width: 140,
      border: '1px solid #00f',
      background: '#fff',
      zIndex: 9999,
      fontSize: 14,
      textAlign: 'center',
    })

    c_app.append(c_notice)
  }

  // 初始化
  const init = () => {
    reset()
    initMenu()
    initBtn()
    initNotice()

    // todo: mock data
    // utils.publishTestStatus(40)
  }

  init()
})()
