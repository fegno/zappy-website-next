export default (req, res) => {
    const randomCode = Math.random().toString(36).substring(2, 8); 
    res.status(200).json({ code: randomCode });
};