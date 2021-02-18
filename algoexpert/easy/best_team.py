
import collections

"""
====================================
SUB-OPTIMAL SOLUTION
====================================

Time: O(N)
Space: O(N)

"""


def tournamentWinnerSub(competitions, results):
    winners = []

    game = 0
    for result in results:
        if result == 0:
            winners.append(competitions[game][1])
        else:
            winners.append(competitions[game][0])
        game += 1

    winners = collections.Counter(winners)
    return (winners.most_common(1)[0][0])


"""
==================
OPTIMAL SOLUTION
==================

Time: O(N) - iterating through the competition
Space: O(K) - the scores will only track teams that have won
"""


def tournamentWinnerOpt(competitions, results):
    bestTeam = ""
    scores = {bestTeam: 0}

    for i, game in enumerate(competitions):
        winner = game[0] if results[i] == 1 else game[1]

        if winner in scores:
            scores[winner] += 3
        else:
            scores[winner] = 3

        if scores[winner] > scores[bestTeam]:
            bestTeam = winner
    return bestTeam
