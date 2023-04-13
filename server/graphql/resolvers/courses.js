
module.exports = {
    Query: {
        courses: async () => {
            return CourseModel.find().exec();
        }, 
        course: async (parent, args) => {
            return CourseModel.findById(args.id).exec();
        }   
    },  
    Mutation: { 
        addCourse: async (parent, args) => {
            var course = new CourseModel(args);
            return course.save();
        },
        deleteCourse: async (parent, args) => {
            return CourseModel.findByIdAndDelete(args.id).exec();
        },
        updateCourse: async (parent, args) => {
            const updateCourse = await
            CourseModel.findByIdAndUpdate(args.id, args);
            if(!updateCourse){
                throw new Error('error')
            }
            return updateCourse;
        }
    }
};