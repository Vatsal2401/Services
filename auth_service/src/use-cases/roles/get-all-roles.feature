# Feature: Get all roles.

#   Scenario Outline: Try to get all roles, then it will give all the roles list.
#     Given Get all the roles.
#     When Try to get all roles.
#     Then It will give roles list: "<roleDetail>"
#     # Then getAllRoles function is called <getAllRole> time

#     Examples: 
#       |  getAllRole      | roleDetail              |
#       |        1         | '[ { "role_id": "7c08cc2f-b148-4772-b062-b0859742cf7c","role_name": "Vatsal","role_email": "vatsalpatel9393@gmail.com","position": "Intern","company_id": "4c1e7d54-b379-4524-aa02-78f3ad8d494b","is_varified": true }]' |