# Feature: filter Session By filterObject.

#   Scenario Outline: Try to filter session with invalid details, then it will throw error.
#     Given Session details sessionId:"<sessionId>" to filter session
#     When Try to filter session
#     Then It will throw error:"<error>" with message:"<message>" while filtering session
#     # And GetSessionsDetailByEmail function will call <getSessionsDetailByEmailFunctionCallCount> time while creating new session
#     # And getSessionsDetailByMobile function will call <getSessionsDetailByMobileFunctionCallCount> time while creating new session
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new session
#     # And createSession function will call <createSessionFunctionCallCount> time while creating new session
#   Examples:
#       | sessionId | error                     | message                       |
#       |           | ValidationError           | "\"session_id\" is required"  |
#       | 23        | ValidationError           | "\"session_id\" must be a valid GUID"|


# Scenario Outline: Try to filter session with valid inputs, then it will success.
#     Given Session details sessionId:'<sessionId>' to filter session
#     When  Try to filter session
#     Then  filter session successfully message:"<message>"

#     Examples:
#       |     sessionId | message                     |
#       |      fa1507c0-05f6-11ee-aacd-d5f50a890398        | filter session successfully | 