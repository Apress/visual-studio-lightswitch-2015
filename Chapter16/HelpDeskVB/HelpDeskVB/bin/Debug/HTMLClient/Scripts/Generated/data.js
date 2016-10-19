/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Department(entitySet) {
        /// <summary>
        /// Represents the Department entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this department.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this department.
        /// </field>
        /// <field name="DepartmentName" type="String">
        /// Gets or sets the departmentName for this department.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this department.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this department.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this department.
        /// </field>
        /// <field name="Postcode" type="String">
        /// Gets or sets the postcode for this department.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this department.
        /// </field>
        /// <field name="DepartmentManager" type="String">
        /// Gets or sets the departmentManager for this department.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this department.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this department.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this department.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this department.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this department.
        /// </field>
        /// <field name="details" type="msls.application.Department.Details">
        /// Gets the details for this department.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Engineer(entitySet) {
        /// <summary>
        /// Represents the Engineer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this engineer.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this engineer.
        /// </field>
        /// <field name="Surname" type="String">
        /// Gets or sets the surname for this engineer.
        /// </field>
        /// <field name="Firstname" type="String">
        /// Gets or sets the firstname for this engineer.
        /// </field>
        /// <field name="DateOfBirth" type="Date">
        /// Gets or sets the dateOfBirth for this engineer.
        /// </field>
        /// <field name="LoginName" type="String">
        /// Gets or sets the loginName for this engineer.
        /// </field>
        /// <field name="SSN" type="String">
        /// Gets or sets the sSN for this engineer.
        /// </field>
        /// <field name="EngineerPhoto" type="String">
        /// Gets or sets the engineerPhoto for this engineer.
        /// </field>
        /// <field name="SecurityVetted" type="Boolean">
        /// Gets or sets the securityVetted for this engineer.
        /// </field>
        /// <field name="ClearanceReference" type="String">
        /// Gets or sets the clearanceReference for this engineer.
        /// </field>
        /// <field name="VettingExpiryDate" type="Date">
        /// Gets or sets the vettingExpiryDate for this engineer.
        /// </field>
        /// <field name="EmailAddress" type="String">
        /// Gets or sets the emailAddress for this engineer.
        /// </field>
        /// <field name="Issues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the issues for this engineer.
        /// </field>
        /// <field name="EngineerIssues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the engineerIssues for this engineer.
        /// </field>
        /// <field name="UserProfile" type="String">
        /// Gets or sets the userProfile for this engineer.
        /// </field>
        /// <field name="Manager" type="msls.application.Engineer">
        /// Gets or sets the manager for this engineer.
        /// </field>
        /// <field name="Subordinates" type="msls.EntityCollection" elementType="msls.application.Engineer">
        /// Gets the subordinates for this engineer.
        /// </field>
        /// <field name="EngineerSkills" type="msls.EntityCollection" elementType="msls.application.EngineerSkill">
        /// Gets the engineerSkills for this engineer.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this engineer.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this engineer.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this engineer.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this engineer.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this engineer.
        /// </field>
        /// <field name="Fullname" type="String">
        /// Gets or sets the fullname for this engineer.
        /// </field>
        /// <field name="IssueCount" type="Number">
        /// Gets or sets the issueCount for this engineer.
        /// </field>
        /// <field name="Age" type="Number">
        /// Gets or sets the age for this engineer.
        /// </field>
        /// <field name="details" type="msls.application.Engineer.Details">
        /// Gets the details for this engineer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EngineerSkill(entitySet) {
        /// <summary>
        /// Represents the EngineerSkill entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this engineerSkill.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this engineerSkill.
        /// </field>
        /// <field name="Engineer" type="msls.application.Engineer">
        /// Gets or sets the engineer for this engineerSkill.
        /// </field>
        /// <field name="Skill" type="msls.application.Skill">
        /// Gets or sets the skill for this engineerSkill.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this engineerSkill.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this engineerSkill.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this engineerSkill.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this engineerSkill.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this engineerSkill.
        /// </field>
        /// <field name="details" type="msls.application.EngineerSkill.Details">
        /// Gets the details for this engineerSkill.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IssueDocument(entitySet) {
        /// <summary>
        /// Represents the IssueDocument entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issueDocument.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issueDocument.
        /// </field>
        /// <field name="DocumentName" type="String">
        /// Gets or sets the documentName for this issueDocument.
        /// </field>
        /// <field name="FileExtension" type="String">
        /// Gets or sets the fileExtension for this issueDocument.
        /// </field>
        /// <field name="IssueFile" type="String">
        /// Gets or sets the issueFile for this issueDocument.
        /// </field>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this issueDocument.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issueDocument.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issueDocument.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issueDocument.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issueDocument.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issueDocument.
        /// </field>
        /// <field name="details" type="msls.application.IssueDocument.Details">
        /// Gets the details for this issueDocument.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IssueResponse(entitySet) {
        /// <summary>
        /// Represents the IssueResponse entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issueResponse.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issueResponse.
        /// </field>
        /// <field name="ResponseDateTime" type="Date">
        /// Gets or sets the responseDateTime for this issueResponse.
        /// </field>
        /// <field name="ResponseText" type="String">
        /// Gets or sets the responseText for this issueResponse.
        /// </field>
        /// <field name="ReviewDate" type="Date">
        /// Gets or sets the reviewDate for this issueResponse.
        /// </field>
        /// <field name="AwaitingClient" type="Boolean">
        /// Gets or sets the awaitingClient for this issueResponse.
        /// </field>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this issueResponse.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issueResponse.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issueResponse.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issueResponse.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issueResponse.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issueResponse.
        /// </field>
        /// <field name="details" type="msls.application.IssueResponse.Details">
        /// Gets the details for this issueResponse.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Issue(entitySet) {
        /// <summary>
        /// Represents the Issue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issue.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issue.
        /// </field>
        /// <field name="TargetEndDateTime" type="Date">
        /// Gets or sets the targetEndDateTime for this issue.
        /// </field>
        /// <field name="Subject" type="String">
        /// Gets or sets the subject for this issue.
        /// </field>
        /// <field name="CreateDateTime" type="Date">
        /// Gets or sets the createDateTime for this issue.
        /// </field>
        /// <field name="ProblemDescription" type="String">
        /// Gets or sets the problemDescription for this issue.
        /// </field>
        /// <field name="AssignedEngineer" type="msls.application.Engineer">
        /// Gets or sets the assignedEngineer for this issue.
        /// </field>
        /// <field name="ClosedByEngineer" type="msls.application.Engineer">
        /// Gets or sets the closedByEngineer for this issue.
        /// </field>
        /// <field name="Priority" type="msls.application.Priority">
        /// Gets or sets the priority for this issue.
        /// </field>
        /// <field name="IssueStatus" type="msls.application.IssueStatus">
        /// Gets or sets the issueStatus for this issue.
        /// </field>
        /// <field name="IssueResponses" type="msls.EntityCollection" elementType="msls.application.IssueResponse">
        /// Gets the issueResponses for this issue.
        /// </field>
        /// <field name="ClosedDateTime" type="Date">
        /// Gets or sets the closedDateTime for this issue.
        /// </field>
        /// <field name="IssueDocuments" type="msls.EntityCollection" elementType="msls.application.IssueDocument">
        /// Gets the issueDocuments for this issue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issue.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issue.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issue.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issue.
        /// </field>
        /// <field name="Icon" type="String">
        /// Gets or sets the icon for this issue.
        /// </field>
        /// <field name="details" type="msls.application.Issue.Details">
        /// Gets the details for this issue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IssueStatus(entitySet) {
        /// <summary>
        /// Represents the IssueStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issueStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issueStatus.
        /// </field>
        /// <field name="StatusDescription" type="String">
        /// Gets or sets the statusDescription for this issueStatus.
        /// </field>
        /// <field name="Issues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the issues for this issueStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issueStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issueStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issueStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issueStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issueStatus.
        /// </field>
        /// <field name="details" type="msls.application.IssueStatus.Details">
        /// Gets the details for this issueStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Priority(entitySet) {
        /// <summary>
        /// Represents the Priority entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this priority.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this priority.
        /// </field>
        /// <field name="PriorityDesc" type="String">
        /// Gets or sets the priorityDesc for this priority.
        /// </field>
        /// <field name="Issues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the issues for this priority.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this priority.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this priority.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this priority.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this priority.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this priority.
        /// </field>
        /// <field name="details" type="msls.application.Priority.Details">
        /// Gets the details for this priority.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Skill(entitySet) {
        /// <summary>
        /// Represents the Skill entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this skill.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this skill.
        /// </field>
        /// <field name="SkillDescription" type="String">
        /// Gets or sets the skillDescription for this skill.
        /// </field>
        /// <field name="EngineerSkills" type="msls.EntityCollection" elementType="msls.application.EngineerSkill">
        /// Gets the engineerSkills for this skill.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this skill.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this skill.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this skill.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this skill.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this skill.
        /// </field>
        /// <field name="details" type="msls.application.Skill.Details">
        /// Gets the details for this skill.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Timesheet(entitySet) {
        /// <summary>
        /// Represents the Timesheet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this timesheet.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this timesheet.
        /// </field>
        /// <field name="DurationMins" type="Number">
        /// Gets or sets the durationMins for this timesheet.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this timesheet.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this timesheet.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this timesheet.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this timesheet.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this timesheet.
        /// </field>
        /// <field name="details" type="msls.application.Timesheet.Details">
        /// Gets the details for this timesheet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function User(entitySet) {
        /// <summary>
        /// Represents the User entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this user.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this user.
        /// </field>
        /// <field name="Firstname" type="String">
        /// Gets or sets the firstname for this user.
        /// </field>
        /// <field name="Surname" type="String">
        /// Gets or sets the surname for this user.
        /// </field>
        /// <field name="PhoneNumber" type="String">
        /// Gets or sets the phoneNumber for this user.
        /// </field>
        /// <field name="Username" type="String">
        /// Gets or sets the username for this user.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this user.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this user.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this user.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this user.
        /// </field>
        /// <field name="Postcode" type="String">
        /// Gets or sets the postcode for this user.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this user.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this user.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this user.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this user.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this user.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this user.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this user.
        /// </field>
        /// <field name="details" type="msls.application.User.Details">
        /// Gets the details for this user.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Departments" type="msls.EntitySet">
        /// Gets the Departments entity set.
        /// </field>
        /// <field name="Engineers" type="msls.EntitySet">
        /// Gets the Engineers entity set.
        /// </field>
        /// <field name="EngineerSkills" type="msls.EntitySet">
        /// Gets the EngineerSkills entity set.
        /// </field>
        /// <field name="IssueDocuments" type="msls.EntitySet">
        /// Gets the IssueDocuments entity set.
        /// </field>
        /// <field name="IssueResponses" type="msls.EntitySet">
        /// Gets the IssueResponses entity set.
        /// </field>
        /// <field name="Issues" type="msls.EntitySet">
        /// Gets the Issues entity set.
        /// </field>
        /// <field name="IssueStatusSet" type="msls.EntitySet">
        /// Gets the IssueStatusSet entity set.
        /// </field>
        /// <field name="Priorities" type="msls.EntitySet">
        /// Gets the Priorities entity set.
        /// </field>
        /// <field name="Skills" type="msls.EntitySet">
        /// Gets the Skills entity set.
        /// </field>
        /// <field name="Timesheets" type="msls.EntitySet">
        /// Gets the Timesheets entity set.
        /// </field>
        /// <field name="Users" type="msls.EntitySet">
        /// Gets the Users entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Department: $defineEntity(Department, [
            { name: "Id", type: Number },
            { name: "DepartmentName", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "City", type: String },
            { name: "Postcode", type: String },
            { name: "Country", type: String },
            { name: "DepartmentManager", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Engineer: $defineEntity(Engineer, [
            { name: "Id", type: Number },
            { name: "Surname", type: String },
            { name: "Firstname", type: String },
            { name: "DateOfBirth", type: Date },
            { name: "LoginName", type: String },
            { name: "SSN", type: String },
            { name: "EngineerPhoto", type: String },
            { name: "SecurityVetted", type: Boolean },
            { name: "ClearanceReference", type: String },
            { name: "VettingExpiryDate", type: Date },
            { name: "EmailAddress", type: String },
            { name: "Issues", kind: "collection", elementType: Issue },
            { name: "EngineerIssues", kind: "collection", elementType: Issue },
            { name: "UserProfile", type: String },
            { name: "Manager", kind: "reference", type: Engineer },
            { name: "Subordinates", kind: "collection", elementType: Engineer },
            { name: "EngineerSkills", kind: "collection", elementType: EngineerSkill },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array },
            { name: "Fullname", type: String, isReadOnly: true },
            { name: "IssueCount", type: Number, isReadOnly: true },
            { name: "Age", type: Number, isReadOnly: true }
        ]),

        EngineerSkill: $defineEntity(EngineerSkill, [
            { name: "Id", type: Number },
            { name: "Engineer", kind: "reference", type: Engineer },
            { name: "Skill", kind: "reference", type: Skill },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IssueDocument: $defineEntity(IssueDocument, [
            { name: "Id", type: Number },
            { name: "DocumentName", type: String },
            { name: "FileExtension", type: String },
            { name: "IssueFile", type: String },
            { name: "Issue", kind: "reference", type: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IssueResponse: $defineEntity(IssueResponse, [
            { name: "Id", type: Number },
            { name: "ResponseDateTime", type: Date },
            { name: "ResponseText", type: String },
            { name: "ReviewDate", type: Date },
            { name: "AwaitingClient", type: Boolean },
            { name: "Issue", kind: "reference", type: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Issue: $defineEntity(Issue, [
            { name: "Id", type: Number },
            { name: "TargetEndDateTime", type: Date },
            { name: "Subject", type: String },
            { name: "CreateDateTime", type: Date },
            { name: "ProblemDescription", type: String },
            { name: "AssignedEngineer", kind: "reference", type: Engineer },
            { name: "ClosedByEngineer", kind: "reference", type: Engineer },
            { name: "Priority", kind: "reference", type: Priority },
            { name: "IssueStatus", kind: "reference", type: IssueStatus },
            { name: "IssueResponses", kind: "collection", elementType: IssueResponse },
            { name: "ClosedDateTime", type: Date },
            { name: "IssueDocuments", kind: "collection", elementType: IssueDocument },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array },
            { name: "Icon", type: String, isReadOnly: true }
        ]),

        IssueStatus: $defineEntity(IssueStatus, [
            { name: "Id", type: Number },
            { name: "StatusDescription", type: String },
            { name: "Issues", kind: "collection", elementType: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Priority: $defineEntity(Priority, [
            { name: "Id", type: Number },
            { name: "PriorityDesc", type: String },
            { name: "Issues", kind: "collection", elementType: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Skill: $defineEntity(Skill, [
            { name: "Id", type: Number },
            { name: "SkillDescription", type: String },
            { name: "EngineerSkills", kind: "collection", elementType: EngineerSkill },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Timesheet: $defineEntity(Timesheet, [
            { name: "Id", type: Number },
            { name: "DurationMins", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        User: $defineEntity(User, [
            { name: "Id", type: Number },
            { name: "Firstname", type: String },
            { name: "Surname", type: String },
            { name: "PhoneNumber", type: String },
            { name: "Username", type: String },
            { name: "Password", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "City", type: String },
            { name: "Postcode", type: String },
            { name: "Country", type: String },
            { name: "Email", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Departments", elementType: Department },
            { name: "Engineers", elementType: Engineer },
            { name: "EngineerSkills", elementType: EngineerSkill },
            { name: "IssueDocuments", elementType: IssueDocument },
            { name: "IssueResponses", elementType: IssueResponse },
            { name: "Issues", elementType: Issue },
            { name: "IssueStatusSet", elementType: IssueStatus },
            { name: "Priorities", elementType: Priority },
            { name: "Skills", elementType: Skill },
            { name: "Timesheets", elementType: Timesheet },
            { name: "Users", elementType: User }
        ], [
            {
                name: "Departments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Departments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Departments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Engineers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Engineers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Engineers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "EngineerSkills_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EngineerSkills },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EngineerSkills(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IssueDocuments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IssueDocuments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssueDocuments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IssueResponses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IssueResponses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssueResponses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Issues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Issues(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IssueStatusSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IssueStatusSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssueStatusSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Priorities_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Priorities },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Priorities(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Skills_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Skills },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Skills(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Timesheets_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Timesheets },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Timesheets(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Users_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Users },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Users(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
