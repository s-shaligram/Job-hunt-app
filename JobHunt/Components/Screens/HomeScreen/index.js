import React from "react";
import {View, Text, Button, ScrollView} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Card, Icon} from "react-native-elements";
import styles from './styles'

const Tab = createBottomTabNavigator();

const Screen1 = () => {

    const arr = [
        {
            jobTitle: 'Software Engineer',
            field: 'Information Technology',
            companyName: 'Microsoft',
            jobType: '',
            location: 'London, ON',
            jobDescription: 'When it comes to digital, physical or electronic payments, the whole world trusts Giesecke+Devrient. Now you too can discover your passion for the world of payment systems. Giesecke+Devrient is a globally active high-tech company headquartered in Munich, Germany. As a trusted partner of central banks and the entire currency industry, we increase security and efficiency in cash circulation. Our 170 years of experience – combined with new, digital solutions – makes us the world market leader in Advanced Currency Management. As part of the G+D Group, we offer a wide range of development opportunities in an international, family-owned company, with more than 12,600 employees worldwide. We are convinced that the key to success is in the diversity of our employees. That’s why it depends on you personally – let’s shape the future of currencies together!\n' +
                '\n' +
                'Scope and Purpose:\n' +
                'Implement software packages at customer sites\n' +
                'Respond to and troubleshoot all customer software issues for G+D SWS products.\n' +
                'Ensure that all issues are resolved to the customer satisfaction within the contracted SLA times. Provide onsite assistance as required.\n' +
                '\n' +
                'Technical Skills:\n' +
                'Installing, configuring and administering/managing IBM WebSphere Application Server 8.5 (WAS), Jboss EAP 6 and IIS\n' +
                'Proficient with war, ear application deployment in Java EE Application Servers environment.\n' +
                'Deep understanding of JDBC and JMS connection management within WebSphere, Jboss\n' +
                'Experience with .NET application installation and deployment\n' +
                'Configuring and integrating applications with database (MS SQL and Oracle), LDAP, Core Banking and 3rd party applications\n' +
                'Understanding of networking and network standards/protocols, such as DHCP, DNS, SSL, TCP, UDP, FTP, SFTP and IP.\n' +
                'Strong SQL and database (MS SQL 2012, Oracle 12C) administration (back-up/restore) skills\n' +
                '\n' +
                'Key Result Areas & Responsibilities:\n' +
                'Document all issues in G+D’s issue tracking system\n' +
                'Setup and configuration of test environment in order to duplicate issues\n' +
                'Responsible to troubleshoot and identify customer issues with the software and escalate to the R&D team if code changes are required.\n' +
                'Assist in the preparation of reports for customer communication\n' +
                'Establish and maintain excellent working relationship with all customers at all times\n' +
                'Keep up-to-date with technical and G+D product knowledge\n' +
                'Lead Implementation activities at customer site\n' +
                'Provide training on software as required\n' +
                'Create documentation (Support/Training) as required\n' +
                '\n' +
                'Job Requirements:\n' +
                'Computer Science or related degree and 4+ years’ experience in a customer support role and prior experience in banking or warehousing industry is desirable.\n' +
                'Excellent verbal, written communication and interpersonal skill are a must.\n' +
                'Strong analytical, problem-solving skills, ability for multitasking and good organizational skills.\n' +
                'Detail-oriented and persistent in execution and follow-up tasks and the ability to lead and work in a team environment.\n' +
                'Must conduct oneself in a professional manner at all times and utilize sound judgment in dealing with business information.\n' +
                'Flexibility to work long hours as necessary and able to handle high pressure in a professional manner.\n' +
                '\n' +
                'Contact\n' +
                'HR Team Dubai\n' +
                'careers-dxb@gi-de.com\n' +
                '\n' +
                'Job offer\n' +
                'Job Details\n' +
                '\n' +
                'Job Title\n' +
                'Field Software Service Engineer - Implementation and Application Support - Angola\n' +
                '\n' +
                'Business Sector\n' +
                'Giesecke+Devrient Currency Technology FZE\n' +
                'B1\n' +
                'Dubai Digital Park\n' +
                'Dubai Silicon Oasis\n' +
                '\n' +
                'Requisition ID\n' +
                '22539\n' +
                '\n' +
                'Location\n' +
                'Dubai, AE\n' +
                '\n' +
                'Career level\n' +
                'Experienced and Graduates\n' +
                '\n' +
                'Job Type\n' +
                'Fulltime\n' +
                '\n' +
                'Contact\n' +
                'HR Team Dubai\n' +
                'careers-dxb@gi-de.com',
            salary: 120000,
        },
        {
            jobTitle: 'Logistic Supervisor',
            field: 'Logistics',
            companyName: 'Amazon',
            jobType: '',
            location: 'Toronto, ON',
            jobDescription: 'Job Purpose: The Senior Software Engineer is a fully participating member of a cross functional team working autonomously on technology development and problem resolution. The role involves the design, development, implementation and maintenance of technology solutions and products that support the Emirates Group Business. Job Outline: - Translate functional and non-functional requirements into fit for purpose technical design and solutions. Ensure solution performance, business edge cases and security related issues while developing software. - Debug issues of complexity and follows design documents with minimal or no supervision. - Perform code review of peers by following good coding principles. Translate business solution requirements into potential technical solutions based on technical design. - Work on problems of diverse scope where analysis of data requires evaluation of identifiable factors. Demonstrate good judgment in selecting methods and techniques for obtaining solutions. - Work with senior technical engineers in the technical design process by contributing in the analysis of technical application requirements. - Automate unit tests and carry out testing independently. Troubleshoot issues, fixes defects that are moderate to high complexity and carry out testing independently. - Shadows peer engineers on design and architecture components and collaborate with members of the cross functional team to identify areas of inefficiency and propose solutions. - Adhere to the Emirates Group IT coding standards, guidelines and best practices. - Responsible for corrective, adaptive, preventative and perfective maintenance of products in collaboration with other capabilities for the relevant product. SPECIFIC ACCOUNTABILIES Enterprise Test Data Management (ETDM) & Platform services : - Design, build and maintain self-service Enterprise Test Data Management platform, tools and services that caters to the organization, thereby facilitating reduced time to market and improved quality - Design, develop and implement platforms, tools, dashboards, and services as needed by the Quality Engineering function to support the Quality Engineering blueprint for the organisation - Facilitate setup of service virtualization tools and mocking solutions for feature teams to consume\n' +
                'Qualifications & Experience: Information Technology. Other: 5+ Years Degree or Honours (12+3 or equivalent): - Degree in a relevant field such as Computer Science, Computer Engineering or Software Engineering. - 5+ yrs of hands-on software development experience using Java/J2EE, Spring, SQL, No-SQL technologies - Good understanding of Architecture including Microservices and SOA, cloud hosted large scale applications, CI/CD, Agile and DevOps practices - Experience in design and implementation of test data generation capabilities to support test data needs of multiple teams across non-production environments - Knowledge of data security/privacy policies, guidelines and standards (GDPR, PCI-DSS etc.) - Experience in the design and implementation of tools and dashboards for Software quality engineering / quality assurance requirements. - Experience in setting up of service virtualization and mocking solutions.\n' +
                'Salary & Benefits: Join us in Dubai and enjoy an attractive tax-free salary and travel benefits that are exclusive to our industry, including discounts on flights and hotels stays around the world. You can find out more information about our employee benefits in the Working Here section of our website www.emirates.com/careers. Further information on what’s it like to live and work in our cosmopolitan home city, can be found in the Dubai Lifestyle section.Join our growing team and enjoy a competitive remuneration package, discounts on flights and hotel stays.',
            salary: 150000,
        },
        {
            jobTitle: 'General Laborer',
            field: 'Construction',
            companyName: 'Walmart',
            jobType: '',
            location: 'St. Thomas, ON',
            jobDescription: 'JGeneral Laborer is a fully participating member of a cross functional team working autonomously on technology development and problem resolution. The role involves the design, development, implementation and maintenance of technology solutions and products that support the Emirates Group Business. Job Outline: - Translate functional and non-functional requirements into fit for purpose technical design and solutions. Ensure solution performance, business edge cases and security related issues while developing software. - Debug issues of complexity and follows design documents with minimal or no supervision. - Perform code review of peers by following good coding principles. Translate business solution requirements into potential technical solutions based on technical design. - Work on problems of diverse scope where analysis of data requires evaluation of identifiable factors. Demonstrate good judgment in selecting methods and techniques for obtaining solutions. - Work with senior technical engineers in the technical design process by contributing in the analysis of technical application requirements. - Automate unit tests and carry out testing independently. Troubleshoot issues, fixes defects that are moderate to high complexity and carry out testing independently. - Shadows peer engineers on design and architecture components and collaborate with members of the cross functional team to identify areas of inefficiency and propose solutions. - Adhere to the Emirates Group IT coding standards, guidelines and best practices. - Responsible for corrective, adaptive, preventative and perfective maintenance of products in collaboration with other capabilities for the relevant product. SPECIFIC ACCOUNTABILIES Enterprise Test Data Management (ETDM) & Platform services : - Design, build and maintain self-service Enterprise Test Data Management platform, tools and services that caters to the organization, thereby facilitating reduced time to market and improved quality - Design, develop and implement platforms, tools, dashboards, and services as needed by the Quality Engineering function to support the Quality Engineering blueprint for the organisation - Facilitate setup of service virtualization tools and mocking solutions for feature teams to consume\n' +
                'Qualifications & Experience: Information Technology. Other: 5+ Years Degree or Honours (12+3 or equivalent): - Degree in a relevant field such as Computer Science, Computer Engineering or Software Engineering. - 5+ yrs of hands-on software development experience using Java/J2EE, Spring, SQL, No-SQL technologies - Good understanding of Architecture including Microservices and SOA, cloud hosted large scale applications, CI/CD, Agile and DevOps practices - Experience in design and implementation of test data generation capabilities to support test data needs of multiple teams across non-production environments - Knowledge of data security/privacy policies, guidelines and standards (GDPR, PCI-DSS etc.) - Experience in the design and implementation of tools and dashboards for Software quality engineering / quality assurance requirements. - Experience in setting up of service virtualization and mocking solutions.\n' +
                'Salary & Benefits: Join us in Dubai and enjoy an attractive tax-free salary and travel benefits that are exclusive to our industry, including discounts on flights and hotels stays around the world. You can find out more information about our employee benefits in the Working Here section of our website www.emirates.com/careers. Further information on what’s it like to live and work in our cosmopolitan home city, can be found in the Dubai Lifestyle section.Join our growing team and enjoy a competitive remuneration package, discounts on flights and hotel stays.',
            salary: 55000,
        }
    ]
    return (
        <ScrollView>
        <View style={styles.container}>
            { arr && arr.map((posting) => (
                <Card>
                    <Text>{posting.companyName}</Text>
                    <Text>{posting.location}</Text>
                    <Text>{posting.jobType}</Text>
                    <Text>{posting.jobDescription}</Text>
                    <Text>{posting.jobTitle}</Text>
                    <Text>{posting.salary}</Text>
                    <Button title={"Apply"}>
                    </Button>
                </Card>
                ))
                }
        </View>
        </ScrollView>
    );
};

const Screen2 = () => (
    <View style={styles.container}>
        <Text>Settings</Text>

    </View>
);

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Screen1} />
            <Tab.Screen name="Settings" component={Screen2} />
        </Tab.Navigator>
    );
}

export default HomeScreen;
